import Logo from "../../components/UI/Logo";
import { HiOutlineLocationMarker } from "react-icons/hi";
import cart from "../../assets/cart.svg";

const HeaderTop = () => {
    return (
        <div className="h-[60px] px-2 flex items-center gap-4">
            <div className="w-24">
                <Logo />
            </div>
            <div className="flex items-end gap-1">
                <HiOutlineLocationMarker
                    color="white"
                    size={20}
                    className="h-10"
                />
                <div className="flex flex-col justify-center">
                    <span className="font-emberl text-sm text-text-secondary">
                        Bonjour
                    </span>
                    <span className="font-emberb text-sm">
                        Entrez votre adresse
                    </span>
                </div>
                <div className="flex flex-col justify-center px-2">
                    <span className="font-ember text-xs">
                        Bonjour, Identifiez-vous
                    </span>
                    <span className="font-emberb text-sm">
                        Compte et listes
                    </span>
                </div>
                <div className="flex flex-col justify-center px-2">
                    <span className="font-ember text-xs">Retours</span>
                    <span className="font-emberb text-sm">et commandes</span>
                </div>
                <div className="flex justify-center px-2">
                    <div className="w-4">
                        <img src={cart} className="w-10 text-white" />
                    </div>
                    Panier
                </div>
            </div>
        </div>
    );
};
export default HeaderTop;
