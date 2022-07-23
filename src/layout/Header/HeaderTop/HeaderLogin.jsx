import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import Button from "../../../components/UI/buttons/Button";
import { Link } from "react-router-dom";

const HeaderLogin = () => {
    const [popup, setPopup] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPopup(false);
        }, 10000);
    }, []);

    return (
        <div className="relative">
            <Link to="/login">
                <div className="flex flex-col justify-center items-center h-full py-2 px-2 hover:cursor-pointer border border-transparent hover:border-white">
                    <span className="font-ember text-xs whitespace-nowrap">
                        Bonjour, Identifiez-vous
                    </span>
                    <div className="flex w-full">
                        <span className="font-emberb text-sm whitespace-nowrap">
                            Compte et listes
                        </span>
                        <MdArrowDropDown color="lightgrey" size={18} />
                    </div>
                </div>
            </Link>

            {!!popup && <LoginPopup />}
        </div>
    );
};
export default HeaderLogin;

const LoginPopup = () => {
    return (
        <div className="absolute z-10 w-52 -bottom-[90] flex flex-col gap-2 items-center p-4 bg-white rounded border-[.4px] border-orange animate-fade-in">
            <div className="absolute -top-[10px] tri border-b-bg-main"></div>
            <Link to="/login">
                <Button>Identifiez-vous</Button>
            </Link>
            <div className="flex font-emberl text-xs text-black">
                <span>{"Nouveau client ? "}</span>
                <Link to="/register">
                    <span
                        className="hover:cursor-pointer text-darkblue"
                        href="/login"
                    >
                        {` Commencer ici`}
                    </span>
                </Link>
            </div>
        </div>
    );
};
