import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema/yup";
import Button from "../../components/UI/buttons/Button";
import { useState } from "react";
import Input from "../../components/UI/form/Input";

const RegisterForm = () => {
    const [modalError, setModalError] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });
    const onSubmit = (data) => console.log("SubmitSuccess", data);

    console.log(errors);
    // console.log(watch("name"));

    return (
        <>
            <form className="flex flex-col gap-5">
                <h2 className="text-3xl font-emberc">Créer un compte</h2>
                <label>
                    Votre nom
                    <Input placeholder="Prénom et nom" />
                    {/* <input
                        type="email"
                        className="w-full border-2"
                        {...register("name")}
                    /> */}
                </label>
                <label>
                    Numéro de téléphone portable ou adresse e-mail
                    <Input />
                    {/* <input
                        type="email"
                        className="w-full border-2"
                        {...register("email")}
                    /> */}
                </label>
                <label>
                    Mot de passe
                    <Input placeholder="Au moins 6 caractères" />
                    {/* <input
                        type="email"
                        className="w-full border-2"
                        {...register("password")}
                    /> */}
                </label>
                <label>
                    Entrez le mot de passe à nouveau
                    <Input />
                    {/* <input
                        type="email"
                        className="w-full border-2"
                        {...register("passwordConfirmation")}
                    /> */}
                </label>
                <button
                    type="submit"
                    className="flex w-full"
                    disabled
                    // onClick={handleSubmit(onSubmit)}
                >
                    <Button>Continuer</Button>
                </button>
            </form>
        </>
    );
};
export default RegisterForm;
