import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/UI/buttons/Button";
import Input from "../../../components/UI/form/Input";
import { userAddressCountries } from "../../../data";
import { addressSchema } from "../../../schema/userDataSchemas";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { addUserAddress } from "../../../firebase/usersCollection";

const AddAddressForm = ({ user }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    console.log("user is: ", user);

    const {
        register,
        handleSubmit,
        clearErrors,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(addressSchema),
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            if (isSubmitting) return;
            setIsSubmitting(true);
            clearErrors();
            console.log(data);

            await addUserAddress(user.userUid, data);

            return setTimeout(() => {
                // setAccountCreated(true);
                navigate("/account/addresses?message=AddressSuccess");
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
                className="w-full flex flex-col gap-5"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
            >
                <label>
                    <span className="font-emberCondensedBold">Pays/région</span>
                    <div className="relative flex items-center">
                        <select
                            {...register("country")}
                            className="w-full border-[1px] bg-bg-mainlight border-secondary rounded focus:outline-none text-base font-emberCondensed px-2 py-1"
                            defaultValue="Sélectionnez votre pays"
                            onChange={(e) =>
                                setValue("country", e.target.value, {
                                    shouldValidate: true,
                                })
                            }
                        >
                            {userAddressCountries.map((country, index) => (
                                <option key={country + index}>{country}</option>
                            ))}
                        </select>
                        <MdKeyboardArrowDown
                            color="black"
                            size={18}
                            className="absolute right-2"
                        />
                    </div>
                    {!!errors?.country?.message && (
                        <p className="text-sm text-red font-emberCondensed mt-2">
                            {errors.country.message}
                        </p>
                    )}
                </label>
                <label>
                    <span className="font-emberCondensedBold">Nom complet</span>
                    <Input
                        placeholder="Saisissez votre nom"
                        register={register}
                        inputName={"fullname"}
                        error={errors?.fullname?.message}
                    />
                </label>
                <label>
                    <span className="font-emberCondensedBold">
                        Numéro de téléphone
                    </span>
                    <Input
                        register={register}
                        inputName={"phoneNumber"}
                        error={errors?.phoneNumber?.message}
                    />
                </label>
                <label>
                    <span className="font-emberCondensedBold">Adresse</span>
                    <div className="flex flex-col gap-1">
                        <Input
                            placeholder="Adresse"
                            register={register}
                            inputName={"street"}
                            error={errors?.street?.message}
                        />
                        <Input
                            placeholder="Apt, suite, unité, nom de l'entreprise (facultatif)"
                            register={register}
                            inputName={"streetBis"}
                            error={""}
                        />
                    </div>
                </label>

                <div className="w-full flex justify-between gap-3">
                    <label className="w-full">
                        <span className="font-emberCondensedBold">
                            Code postal
                        </span>
                        <Input
                            register={register}
                            inputName={"zipCode"}
                            error={errors?.zipCode?.message}
                        />
                    </label>
                    <label className="w-full">
                        <span className="font-emberCondensedBold">Ville</span>
                        <Input
                            register={register}
                            inputName={"city"}
                            error={errors?.city?.message}
                        />
                    </label>
                </div>

                <label className="flex items-baseline gap-1">
                    <input
                        type="checkbox"
                        {...register("defaultAddress")}
                        error={errors?.defaultAddress?.message}
                    />
                    <span className="">
                        Faire de cette addresse mon addresse par défaut
                    </span>
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

export default AddAddressForm;
