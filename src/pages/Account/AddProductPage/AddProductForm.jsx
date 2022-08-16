import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddProductForm = ({ setModalError, setEmail }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(emailSchema),
    });

    const onSubmit = async (data) => {
        try {
            if (isSubmitting) return;
            setIsSubmitting(true);
            clearErrors();

            const currentUserEmail = await fetchSignInMethodsForEmail(
                auth,
                data.email
            );
            if (!currentUserEmail)
                throw new Error(
                    "AddProductForm Error: Error while fetching sign in methods for email."
                );
            if (!currentUserEmail.includes("password")) {
                setModalError(true);
                throw new Error(
                    "AddProductForm Error: No sign in methods available for this email"
                );
            }
            setModalError(false);
            setEmail(data.email);
            return;
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setEmailAsyncError("That email address is already in use!");
            }
            if (error.code === "auth/invalid-email") {
                setEmailAsyncError("That email address is invalid!");
            }
            // console.error(error);
            setIsSubmitting(false);
            return;
        }
    };

    return (
        <form
            className="flex flex-col gap-4 font-emberCondensedBold"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h2 className="text-3xl font-emberCondensed">S'identifier</h2>
            <label>
                Adresse e-mail ou numéro de téléphone portable
                <Input register={register} inputname={"email"} error={""} />
            </label>
            <button type="submit" className="flex w-full">
                <Button>Continuer</Button>
            </button>
        </form>
    );
};
export default AddProductForm;
