import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import LoginPageFooter from "./LoginPageFooter";
import Button from "../../components/UI/buttons/Button";

const LoginPage = () => {
    return (
        <main className="w-full relative flex flex-col gap-4 items-center bg-white">
            <section className="flex flex-col items-center gap-6 z-10 py-4">
                <a href="/" className="w-32">
                    <img src={logo} alt="amazon logo" />
                </a>
                <div className="w-[400px] flex flex-col gap-4 font-embercb p-6 border-[1px] border-secondary rounded">
                    <h2 className="text-4xl font-emberc">S'identifier</h2>
                    <label>
                        Adresse e-mail ou numéro de téléphone portable
                        <input
                            type="email"
                            className="w-full border-[1px] border-secondary rounded focus:outline-none"
                        />
                    </label>
                    <Button>Continuer</Button>

                    <p className="font-emberc text-sm">
                        En passant votre commande, vous acceptez les Conditions
                        générales de vente d’Amazon. Veuillez consulter notre
                        Notice Protection de vos informations personnelles,
                        notre Notice Cookies et notre Notice Annonces
                        publicitaires basées sur vos centres d’intérêt.
                    </p>

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
            <hr className="h-[2px] w-full bg-gradient-to-r from-white via-bg-main to-white border-none" />
            <LoginPageFooter />
        </main>
    );
};
export default LoginPage;
