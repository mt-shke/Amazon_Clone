import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordSchema } from "../../schema/yup";
import { useState } from "react";
import Input from "../../components/UI/form/Input";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Button from "../../components/UI/buttons/Button";
import { firebaseApp } from "../../firebase";
import { MdArrowDropDown } from "react-icons/md";

const auth = getAuth(firebaseApp);

const LoginPasswordForm = ({ setModalError, setEmail, email }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(passwordSchema),
    });

    const onSubmit = async (data) => {
        try {
            if (isSubmitting) return;
            setIsSubmitting(true);
            clearErrors();

            const signedInUser = await signInWithEmailAndPassword(
                auth,
                email,
                data.password
            );
            if (!signedInUser)
                throw new Error(
                    "LoginPasswordForm Error: Error while fetching sign in methods for email."
                );

            setModalError(null);
            return setTimeout(() => {
                setIsSubmitting(false);
            }, 3000);
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                setModalError("password");
            }

            setIsSubmitting(false);
            return;
        }
    };

    if (errors?.password?.message) {
        setModalError("password");
    }

    return (
        <form
            className="flex flex-col gap-4 font-emberCondensed text-sm"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className="text-3xl">S'identifier</h2>

            <div className="flex flex-row gap-1">
                <span>{email}</span>
                <span
                    onClick={() => setEmail(null)}
                    className="text-blue hover:cursor-pointer"
                >
                    Modifier
                </span>
            </div>
            <label>
                <div className="w-full flex flex-row justify-between">
                    <span className="font-emberCondensedBold">
                        Mot de passe
                    </span>
                    <span className="text-blue hover:cursor-pointer">
                        Mot de passe oublié
                    </span>
                </div>
                <Input
                    register={register}
                    inputName={"password"}
                    error={""}
                    type="password"
                />
            </label>
            <button type="submit" className="flex w-full">
                <Button>S'identifier</Button>
            </button>
            <div className="flex flex-row gap-1 items-baseline">
                <input type="checkbox" />
                <span>Rester connecté</span>
                <span className="flex flex-row gap-1 font-emberCondensedBold text-blue hover:cursor-pointer">
                    Détails
                    <MdArrowDropDown color="black" size={14} />
                </span>
            </div>
        </form>
    );
};
export default LoginPasswordForm;
