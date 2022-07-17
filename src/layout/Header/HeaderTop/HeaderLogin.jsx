import { MdArrowDropDown } from "react-icons/md";

const HeaderLogin = () => {
    return (
        <div className="flex flex-col justify-center  h-full py-2 px-2 hover:cursor-pointer border border-transparent hover:border-white">
            <span className="font-ember text-xs whitespace-nowrap">
                Bonjour, Identifiez-vous
            </span>
            <div className="flex items-center">
                <span className="font-emberb text-sm whitespace-nowrap">
                    Compte et listes
                </span>
                <MdArrowDropDown color="lightgrey" size={18} />
            </div>
        </div>
    );
};
export default HeaderLogin;
