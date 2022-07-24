import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "../../components/UI/buttons/Button";
import CustomLink from "../../components/UI/buttons/CustomLink";
import LoginPageFooter from "../LoginPage/LoginPageFooter";
import LoginPageCGV from "../LoginPage/LoginPageCGV";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
    return (
        <main className="w-full relative flex flex-col gap-4 items-center bg-white">
            <section className="max-w-[400px] flex flex-col items-center gap-6 z-10 py-4">
                <a href="/" className="w-28">
                    <img src={logo} alt="amazon logo" />
                </a>

                <div className="w-full flex flex-col gap-4 font-embercb p-5 border-[1px] border-secondary rounded">
                    <RegisterForm />

                    <LoginPageCGV />

                    <hr className="h-[2px] w-3/4 my-2 bg-gradient-to-r from-white via-bg-main to-white border-none" />

                    <p className="font-emberc text-sm">
                        Vous possédez déjà un compte ?{" "}
                        <CustomLink>Identifiez-vous</CustomLink> Vous achetez
                        pour votre entreprise ?{" "}
                        <CustomLink>
                            Créez un compte professionnel gratuit
                        </CustomLink>
                    </p>
                </div>
            </section>
            <hr className="h-[2px] w-3/4 bg-gradient-to-r from-white via-bg-main to-white border-none" />
            <LoginPageFooter />
        </main>
    );
};

export default RegisterPage;
