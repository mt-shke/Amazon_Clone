import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/UI/buttons/Button";
import Input from "../../../components/UI/form/Input";
import { sendImgToStorage } from "../../../firebase/storage";
import { updateUserFirestoreData } from "../../../firebase/usersCollection";
import { userDataSchema } from "../../../schema/userDataSchemas";

const UpdateUserdataForm = ({ user }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentImg, setCurrentImg] = useState(null);

    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userDataSchema),
    });

    const navigate = useNavigate();

    const inputImageHandler = (e) => {
        setCurrentImg((p) => e.target.files[0]);
    };

    const onSubmit = async (data) => {
        try {
            if (isSubmitting) return;
            setIsSubmitting(true);
            clearErrors();
            console.log(data);

            let avatarUrl = "";
            if (currentImg) {
                avatarUrl = await sendImgToStorage(user, currentImg);
            }

            await updateUserFirestoreData(user, {
                ...data,
                profilPicture: avatarUrl,
            });
            return setTimeout(() => {
                // setAccountCreated(true);
                navigate("/account?message=UpdateProfilSuccess");
            }, 1500);
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
            }
            if (error.code === "auth/invalid-email") {
            }
            console.error("Add address error: ", error);
            setIsSubmitting(false);
            return;
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <form
                className="w-full flex min-w-[380px] flex-col gap-5"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
            >
                <label>
                    <span className="font-emberCondensedBold">Prénom</span>
                    <Input
                        placeholder="Saisissez votre prénom"
                        register={register}
                        inputname={"firstname"}
                        error={errors?.firstname?.message}
                    />
                </label>
                <label>
                    <span className="font-emberCondensedBold">Nom</span>
                    <Input
                        placeholder="Saisissez votre nom"
                        register={register}
                        inputname={"lastname"}
                        error={errors?.lastname?.message}
                    />
                </label>
                <label>
                    <span className="font-emberCondensedBold">Email</span>
                    <Input
                        placeholder="Modifier votre email"
                        register={register}
                        inputname={"email"}
                        error={errors?.email?.message}
                    />
                </label>

                <label htmlFor="avatar" className="my-2">
                    <span className="font-emberCondensedBold bg-bg-main rounded px-3 py-2 text-sm border-[1px] border-secondary">
                        Ajouter un avatar
                    </span>
                    <div>
                        <input
                            onChange={(e) => inputImageHandler(e)}
                            id="avatar"
                            type="file"
                            accept="image/*"
                            placeholder="Ajouter un avatar"
                            // {...register("profilPicture")}
                            // className="hidden"
                        />
                    </div>
                </label>

                <button
                    disabled={!!isSubmitting}
                    className={
                        isSubmitting ? "flex w-full opacity-50" : "flex w-full"
                    }
                    type="submit"
                >
                    <Button>Ajouter une adresse</Button>
                </button>
            </form>
        </>
    );
};

export default UpdateUserdataForm;
