import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/UI/buttons/Button";
import Input from "../../../components/UI/form/Input";
import {
    deleteImg,
    getImgUrl,
    sendImgToStorage,
} from "../../../firebase/storage";
import { updateUserFirestoreData } from "../../../firebase/usersCollection";
import { userDataSchema } from "../../../schema/userDataSchemas";

const UpdateUserdataForm = ({ user, fetchUserData }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentImg, setCurrentImg] = useState(null);
    const [currentImgUrl, setCurrentImgUrl] = useState(null);

    useEffect(() => {
        if (!currentImg && user.profilPicture) {
            getUserAvatar();
        }
    }, []);

    const getUserAvatar = async () => {
        const avatarUrl = await getImgUrl(user, user.profilPicture);
        setCurrentImgUrl((p) => avatarUrl);
    };

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
        setCurrentImgUrl((p) => URL.createObjectURL(e.target.files[0]));
    };

    const onSubmit = async (data) => {
        let avatarRef = "";
        try {
            if (isSubmitting) return;
            setIsSubmitting(true);
            clearErrors();

            if (currentImg) {
                avatarRef = await sendImgToStorage(user, currentImg);
            }

            // throw new Error("try this");
            await updateUserFirestoreData(user, {
                ...data,
                profilPicture: avatarRef,
            });

            if (avatarRef !== user.profilPicture) {
                await deleteImg(user, user.profilPicture);
            }

            return setTimeout(() => {
                // setAccountCreated(true);
                fetchUserData();
                navigate("/account");
            }, 1500);
        } catch (error) {
            if (avatarRef) {
                await deleteImg(user, avatarRef);
            }
            console.error("UpdateUserdataForm error: ", error);
            setIsSubmitting(false);
            return;
        }
    };

    return (
        <>
            <form
                className="w-full flex flex-auto flex-col gap-5"
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
                        defaultValue={user.firstname}
                    />
                </label>
                <label>
                    <span className="font-emberCondensedBold">Nom</span>
                    <Input
                        placeholder="Saisissez votre nom"
                        register={register}
                        inputname={"lastname"}
                        error={errors?.lastname?.message}
                        defaultValue={user.lastname}
                    />
                </label>
                <label>
                    <span className="font-emberCondensedBold">Email</span>
                    <Input
                        placeholder="Modifier votre email"
                        register={register}
                        inputname={"email"}
                        error={errors?.email?.message}
                        defaultValue={user.email}
                    />
                </label>

                <label htmlFor="avatar" className="flex flex-row gap-6 my-2">
                    <span className="font-emberCondensedBold bg-bg-main rounded px-3 py-2 h-fit text-sm border-[1px] border-secondary">
                        Ajouter un avatar
                    </span>
                    <div className="w-20 aspect-square">
                        <input
                            onChange={(e) => inputImageHandler(e)}
                            id="avatar"
                            type="file"
                            accept="image/*"
                            placeholder="Ajouter un avatar"
                            // {...register("profilPicture")}
                            className="hidden"
                        />

                        {!!currentImgUrl && (
                            <img
                                className="object-contain"
                                src={currentImgUrl}
                            />
                        )}
                    </div>
                </label>

                <button
                    disabled={!!isSubmitting}
                    className={
                        isSubmitting ? "flex w-full opacity-50" : "flex w-full"
                    }
                    type="submit"
                >
                    <Button>Mettre à jour</Button>
                </button>
            </form>
        </>
    );
};

export default UpdateUserdataForm;
