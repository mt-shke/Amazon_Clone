import logo from "../../assets/logo.png";
import CustomLink from "../../components/UI/buttons/CustomLink";
import LoginPageFooter from "../LoginPage/LoginPageFooter";
import RegisterForm from "./RegisterForm";
import VerifyEmailMessage from "./VerifyEmailMessage";
import CGV from "./CGV";
import { useLocation } from "react-router-dom";

const RegisterPage = () => {
    const { search } = useLocation();

    // Set form content by default
    let registerContent = (
        <div className="w-full flex flex-col gap-4 font-emberCondensedBold p-5 border-[1px] border-secondary rounded">
            <RegisterForm />
            <CGV />
            <hr className="h-[2px] w-3/4 my-2 bg-gradient-to-r from-white via-bg-main to-white border-none" />
            <p className="font-emberCondensed text-sm">
                Vous possédez déjà un compte ?
                <CustomLink>{` Identifiez-vous`}</CustomLink> Vous achetez pour
                votre entreprise ?
                <CustomLink>
                    {` Créez un compte professionnel gratuit`}
                </CustomLink>
            </p>
        </div>
    );

    // If account is registered, update search query with registered email and set verify message
    if (search.startsWith("?newAccountEmail=")) {
        registerContent = (
            <VerifyEmailMessage
                email={search.replace("?newAccountEmail=", "")}
            />
        );
    }

    return (
        <main className="w-full relative flex flex-col gap-4 items-center bg-white">
            <section className="max-w-[400px] flex flex-col items-center gap-6 z-10 p-4">
                <a href="/" className="w-28">
                    <img src={logo} alt="amazon logo" />
                </a>
                {registerContent}
            </section>
            <hr className="h-[2px] w-3/4 bg-gradient-to-r from-white via-bg-main to-white border-none" />
            <LoginPageFooter />
        </main>
    );
};

export default RegisterPage;
