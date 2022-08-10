import logo from "../../assets/logo.png";
import CustomLink from "../../components/UI/buttons/CustomLink";
import LoginPageFooter from "../LoginPage/LoginPageFooter";
import RegisterForm from "./RegisterForm";
import VerifyEmailMessage from "./VerifyEmailMessage";
import { useState } from "react";
import CGV from "./CGV";

const RegisterPage = () => {
    const [accountCreated, setAccountCreated] = useState(false);

    return (
        <main className="w-full relative flex flex-col gap-4 items-center bg-white">
            <section className="max-w-[400px] flex flex-col items-center gap-6 z-10 py-4">
                <a href="/" className="w-28">
                    <img src={logo} alt="amazon logo" />
                </a>
                {!accountCreated && (
                    <div className="w-full flex flex-col gap-4 font-emberCondensedBold p-5 border-[1px] border-secondary rounded">
                        <RegisterForm setAccountCreated={setAccountCreated} />
                        <CGV />
                        <hr className="h-[2px] w-3/4 my-2 bg-gradient-to-r from-white via-bg-main to-white border-none" />
                        <p className="font-emberCondensed text-sm">
                            Vous possédez déjà un compte ?
                            <CustomLink>{` Identifiez-vous`}</CustomLink> Vous
                            achetez pour votre entreprise ?
                            <CustomLink>
                                {` Créez un compte professionnel gratuit`}
                            </CustomLink>
                        </p>
                    </div>
                )}

                {!!accountCreated && <VerifyEmailMessage />}
            </section>
            <hr className="h-[2px] w-3/4 bg-gradient-to-r from-white via-bg-main to-white border-none" />
            <LoginPageFooter />
        </main>
    );
};

export default RegisterPage;
