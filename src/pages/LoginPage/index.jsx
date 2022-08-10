import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import LoginPageFooter from "./LoginPageFooter";
import Button from "../../components/UI/buttons/Button";
import LoginPageModalError from "./LoginPageModalError";
import { useState } from "react";
import LoginEmailForm from "./LoginEmailForm";
import LoginPasswordForm from "./LoginPasswordForm";
import CGV from "../RegisterPage/CGV";

const LoginPage = () => {
    const [modalError, setModalError] = useState(null);
    const [email, setEmail] = useState(null);

    return (
        <main className="w-full relative flex flex-col gap-4 items-center bg-white">
            <section className="max-w-[400px] flex flex-col items-center gap-6 z-10 p-4">
                <a href="/" className="w-28">
                    <img src={logo} alt="amazon logo" />
                </a>
                {!!modalError && <LoginPageModalError errorType={modalError} />}
                <div className="w-full flex flex-col gap-4 font-emberCondensedBold p-6 border-[1px] border-secondary rounded">
                    {!email && (
                        <LoginEmailForm
                            setModalError={setModalError}
                            setEmail={setEmail}
                        />
                    )}
                    {!!email && (
                        <LoginPasswordForm
                            setModalError={setModalError}
                            setEmail={setEmail}
                            email={email}
                        />
                    )}
                    <CGV page="login" />

                    <details className="font-emberCondensed text-sm text-blue hover:cursor-pointer">
                        <summary>Avez-vous besoin d’aide ?</summary>
                        <div className=" flex flex-col ml-4">
                            <a href="">Mot de passe oublié</a>
                            <a href="">Autres problèmes de connexion</a>
                        </div>
                    </details>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-row justify-between items-center gap-2 w-full">
                        <hr className="w-full" />
                        <span className="whitespace-nowrap text-darkgrey">
                            Nouveau chez Amazon ?
                        </span>
                        <hr className="w-full" />
                    </div>
                    <Link to={"/register"} className="flex">
                        <Button color={"grey"}>
                            Créer votre compte Amazon
                        </Button>
                    </Link>
                </div>
            </section>
            <hr className="h-[2px] w-3/4 bg-gradient-to-r from-white via-bg-main to-white border-none" />
            <LoginPageFooter />
        </main>
    );
};

export default LoginPage;
