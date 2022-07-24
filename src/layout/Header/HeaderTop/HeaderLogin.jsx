import { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import Button from "../../../components/UI/buttons/Button";
import { Link } from "react-router-dom";
import CustomLink from "../../../components/UI/buttons/CustomLink";

const HeaderLogin = () => {
    const [popup, setPopup] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setPopup(false);
        }, 10000);
    }, []);

    return (
        <div className="flex h-full relative">
            <Link to="/login">
                <div className="h-full flex flex-col justify-center items-center p-1 hover:cursor-pointer border border-transparent hover:border-white">
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
        <div className="absolute z-10 w-52 -bottom-[86px] flex flex-col gap-2 items-center p-4 bg-white rounded border-[.4px] border-orange animate-fade-in">
            <div className="absolute -top-[10px] tri border-b-bg-main"></div>
            <Link to="/login">
                <Button>Identifiez-vous</Button>
            </Link>
            <div className="flex gap-1 font-emberl text-xs text-black">
                <span>Nouveau client ?</span>
                <CustomLink url={"/login"}>Commencer ici</CustomLink>
            </div>
        </div>
    );
};
