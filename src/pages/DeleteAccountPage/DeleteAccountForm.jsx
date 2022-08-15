import { yupResolver } from "@hookform/resolvers/yup";
import { getAuth } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/buttons/Button";
import Input from "../../components/UI/form/Input";
import {
    deleteAuthenticatedUser,
    firebaseApp,
    signIn,
    signOutFromApp,
} from "../../firebase";
import { deleteUserData } from "../../firebase/usersCollection";
import { credentialsSchema } from "../../schema/yup";
import { AuthContext } from "../../state/AuthContext";

const auth = getAuth(firebaseApp);

const DeleteAccountForm = ({ setDeleteMessage }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [passwordAsyncError, setPasswordAsyncError] = useState(null);
    const { state } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(credentialsSchema),
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            if (isSubmitting) return;
            setIsSubmitting(true);
            clearErrors();
            setPasswordAsyncError(null);

            const signBeforeDeleteUser = await signIn(
                data.email,
                data.password
            );

            if (!signBeforeDeleteUser) {
                throw new Error();
            }

            setDeleteMessage(true);

            await deleteUserData(state.user.uid);
            // const deletedData = await Promise.all([
            //     await deleteUserData(state.loggedUser.userUid),
            // ]);
            // if (!deletedData) {
            //     console.error("User data not properly deleted!");
            // }
            await deleteAuthenticatedUser(state.user.uid);

            return setTimeout(() => {
                navigate("/");
                signOutFromApp();
            }, 3000);
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                setPasswordAsyncError("Mot de passe incorrecte");
            }

            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            className="w-full flex flex-col gap-5 px-4 py-8 border-[1px] border-secondary rounded"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
        >
            <label>
                <span className="font-emberCondensedBold">Votre email</span>
                <Input
                    placeholder=""
                    register={register}
                    inputname={"email"}
                    error={errors?.email?.message}
                />
            </label>

            <label>
                <span className="font-emberCondensedBold">Mot de passe</span>
                <Input
                    placeholder=""
                    register={register}
                    type="password"
                    inputname={"password"}
                    error={
                        passwordAsyncError ?? errors?.password?.message ?? ""
                    }
                />
            </label>

            <button
                disabled={!!isSubmitting}
                className={
                    isSubmitting ? "flex w-fit opacity-50" : "flex w-fit"
                }
                type="submit"
            >
                <Button color="grey">Supprimer votre compte</Button>
            </button>
        </form>
    );
};

export default DeleteAccountForm;
