import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import LoginPageFooter from "./LoginPageFooter";
import Button from "../../components/UI/buttons/Button";
import LoginPageModalError from "./LoginPageModalError";
import { useState } from "react";
import LoginPageCGV from "./LoginPageCGV";

const LoginPage = () => {
    const [modalError, setModalError] = useState(false);

    return (
        <main className="w-full relative flex flex-col gap-4 items-center bg-white">
            <section className="max-w-[400px] flex flex-col items-center gap-6 z-10 p-4">
                <a href="/" className="w-28">
                    <img src={logo} alt="amazon logo" />
                </a>
                {modalError && <LoginPageModalError />}

                <div className="w-full flex flex-col gap-4 font-embercb p-6 border-[1px] border-secondary rounded">
                    <h2 className="text-3xl font-emberc">S'identifier</h2>
                    <label>
                        Adresse e-mail ou numéro de téléphone portable
                        <input
                            type="email"
                            className="w-full border-[1px] border-secondary rounded focus:outline-none"
                        />
                    </label>
                    <div
                        className="flex"
                        onClick={() => setModalError((p) => !p)}
                    >
                        <Button>Continuer</Button>
                    </div>

                    <LoginPageCGV />

                    <details className="font-emberc text-sm text-blue hover:cursor-pointer">
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
