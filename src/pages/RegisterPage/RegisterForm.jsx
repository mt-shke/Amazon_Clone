import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema/yup";
import { useState } from "react";
import { createNewAuthUser, sendEmailValidation } from "../../firebase";
import Button from "../../components/UI/buttons/Button";
import Input from "../../components/UI/form/Input";
import { createNewUserFirestoreData } from "../../firebase/usersCollection";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [emailAsyncError, setEmailAsyncError] = useState(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = async (data) => {
        try {
            if (isSubmitting) return;
            setIsSubmitting(true);
            clearErrors();
            setEmailAsyncError(null);
            const newUser = await createNewAuthUser(data.email, data.password);
            if (!newUser) throw new Error("Error while creating new user");
            console.log(newUser);

            const allResponse = await Promise.all([
                await sendEmailValidation(newUser.user),
                await createNewUserFirestoreData(newUser.user.uid, {
                    email: data.email,
                    name: data.name,
                }),
            ]);

            if (!allResponse) {
                throw new Error(
                    "Could not send email verification/Set user data to firestore"
                );
            }
            navigate("/register?newAccountEmail=" + data.email);
            return;
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setEmailAsyncError("That email address is already in use!");
            }
            if (error.code === "auth/invalid-email") {
                setEmailAsyncError("That email address is invalid!");
            }
        } finally {
            return setIsSubmitting(false);
        }
    };

    return (
        <>
            <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
            >
                <h2 className="text-3xl font-emberCondensed">
                    Créer un compte
                </h2>
                <label>
                    Votre nom
                    <Input
                        placeholder="Prénom et nom"
                        register={register}
                        inputName={"name"}
                        error={errors.name?.message}
                    />
                </label>
                <label>
                    Numéro de téléphone portable ou adresse e-mail
                    <Input
                        register={register}
                        inputName={"email"}
                        error={emailAsyncError ?? errors.email?.message}
                    />
                </label>
                <label>
                    Mot de passe
                    <Input
                        placeholder="Au moins 6 caractères"
                        register={register}
                        inputName={"password"}
                        type="password"
                        error={errors.password?.message}
                    />
                </label>
                <label>
                    Entrez le mot de passe à nouveau
                    <Input
                        register={register}
                        type="password"
                        inputName={"passwordConfirmation"}
                        error={errors.passwordConfirmation?.message}
                    />
                </label>
                <button type="submit" className="flex w-full">
                    <Button>Continuer</Button>
                </button>
            </form>
        </>
    );
};

export default RegisterForm;
