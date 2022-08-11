import { yupResolver } from "@hookform/resolvers/yup";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/UI/buttons/Button";
import Input from "../../../components/UI/form/Input";
import { firebaseApp } from "../../../firebase";
import { addressSchema } from "../../../schema/userDataSchemas";

const auth = getAuth(firebaseApp);

const AddAddressForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(addressSchema),
    });

    const onSubmit = async (data) => {
        try {
            if (isSubmitting) return;
            setIsSubmitting(true);
            clearErrors();
            setEmailAsyncError(null);
            // const newUser = await createNewAuthUser(data.email, data.password);

            // if (!newUser) throw new Error();
            // await sendEmailValidation();
            // const allResponse = await Promise.all([
            //     await sendEmailVerification(auth.currentUser),
            //     await setUserToFirestore(newUser.user.uid, {
            //         email: data.email,
            //         name: data.name,
            //     }),
            // ]);

            // if (!allResponse) {
            //     throw new Error(
            //         "Could not send email verification/Set user data to firestore"
            //     );
            // }
            return setTimeout(() => {
                // setAccountCreated(true);
            }, 3000);
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
            }
            if (error.code === "auth/invalid-email") {
            }
            setIsSubmitting(false);
            return;
        }
    };

    return (
        <>
            <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
            >
                <label>
                    <span className="font-emberCondensedBold">Nom complet</span>
                    <Input
                        placeholder="Saisissez votre nom"
                        register={register}
                        inputName={"fullname"}
                        error={""}
                    />
                </label>
                <label>
                    <span className="font-emberCondensedBold">
                        Numéro de téléphone
                    </span>
                    <Input
                        placeholder="Prénom et nom"
                        register={register}
                        inputName={"fullname"}
                        error={""}
                    />
                </label>
                <label>
                    <span className="font-emberCondensedBold">Adresse</span>
                    <Input
                        placeholder="Adresse"
                        register={register}
                        inputName={"fullname"}
                        error={""}
                    />
                    <Input
                        placeholder="Adresse"
                        register={register}
                        inputName={"fullname"}
                        error={""}
                    />
                </label>

                <div className="flex gap-3">
                    <label>
                        <span className="font-emberCondensedBold">
                            Code postal
                        </span>
                        <Input
                            register={register}
                            inputName={"fullname"}
                            error={""}
                        />
                    </label>
                    <label>
                        <span className="font-emberCondensedBold">Ville</span>
                        <Input
                            register={register}
                            inputName={"fullname"}
                            error={""}
                        />
                    </label>
                </div>
                <button type="submit" className="flex w-full">
                    <Button>Ajouter une adresse</Button>
                </button>
            </form>
        </>
    );
};

export default AddAddressForm;
