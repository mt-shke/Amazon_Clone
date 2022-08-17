import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Button from "../../../components/UI/buttons/Button";
import { Link } from "react-router-dom";
import CustomLink from "../../../components/UI/buttons/CustomLink";

const HeaderLogin = ({ user }) => {
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        // if (popup) {
        //     setTimeout(() => {
        //         setPopup(false);
        //     }, 10000);
        // }
    }, []);

    return (
        <div className="w-full sm:w-full md:w-fit h-full justify-end flex items-center relative">
            <Link to={user ? "/account" : "/login"}>
                <div className="hidden sm:hidden md:flex h-full flex-col justify-center items-start p-1 hover:cursor-pointer border border-transparent hover:border-white">
                    <span className="font-ember text-xs whitespace-nowrap">
                        {user
                            ? `Bonjour ${user.firstname ?? ""}`
                            : "Bonjour, Identifiez-vous"}
                    </span>
                    <div className="flex w-full">
                        <span className="font-emberBold text-sm whitespace-nowrap">
                            Compte et listes
                        </span>
                        <MdArrowDropDown color="lightgrey" size={18} />
                    </div>
                </div>
                <div className="flex sm:flex md:hidden items-baseline gap-2">
                    <span className="font-emberBold text-base whitespace-nowrap">
                        {user
                            ? `Bonjour ${user.firstname ?? ""}`
                            : "Se connecter"}
                    </span>

                    <FaRegUser color="lightgrey" size={18} />
                </div>
            </Link>
            {!!popup && <LoginPopup />}
        </div>
    );
};

export default HeaderLogin;

const LoginPopup = () => {
    return (
        <div className="hidden sm:hidden md:flex absolute z-10 w-52 -bottom-[86px] flex-col gap-2 items-center p-4 bg-white rounded border-[.4px] border-orange animate-fade-in">
            <div className="absolute -top-[10px] tri border-b-bg-main"></div>
            <Link to="/login">
                <Button>Identifiez-vous</Button>
            </Link>
            <div className="flex gap-1 font-emberLight text-xs text-black">
                <span>Nouveau client ?</span>
                <CustomLink url={"/login"}>Commencer ici</CustomLink>
            </div>
        </div>
    );
};
