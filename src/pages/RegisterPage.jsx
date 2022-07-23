import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <main className="w-full relative flex flex-col items-center bg-white">
            <section className="flex flex-col items-center gap-6 z-10 py-4">
                <a href="/" className="w-32">
                    <img src={logo} alt="amazon logo" />
                </a>

                <h2>Register page - Work in progress...</h2>
                <div className="animate-spin w-10 h-10 border-b-2 border-black rounded-full"></div>
            </section>
        </main>
    );
};
export default RegisterPage;
