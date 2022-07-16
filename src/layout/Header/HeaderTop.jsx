import Logo from "../../components/UI/Logo";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import cart from "../../assets/cart.svg";

const ddOptions = [
    "Alexa Skills",
    "Amazon Global Store",
    "Amazon Warehouse",
    "Animalerie",
    "Applis & Jeux",
    "Auto et Moto",
    "Bagages",
    "Beauté et Parfum",
    "Beauté Premium",
    "Bijoux",
    "Boutique chèques-cadeaux",
    "Boutique Kindle",
    "Bricolage",
    "Bébé & Puériculture",
    "Chaussures et Sacs",
    "Cuisine & Maison",
    "DVD & Blu-ray",
    "Epicerie",
];

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

                <div className="text-bg-dark flex overflow-hidden rounded ">
                    <select class="w-40 text-xs font-emberl">
                        <option disabled selected>
                            Toutes nos catégories
                        </option>
                        {ddOptions.map((opt) => (
                            <option>{`${opt}`}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        className="w-full hover:border-w-1 border-orange"
                    />
                    <div className="p-2 grid place-items-center font-bold text-bg-dark bg-orange">
                        <AiOutlineSearch size={22} />
                    </div>
                </div>
                <div className="flex flex-col justify-center px-2">
                    <span className="font-ember text-xs">
                        Bonjour, Identifiez-vous
                    </span>
                    <div className="flex items-center">
                        <span className="font-emberb text-sm">
                            Compte et listes
                        </span>
                        <MdArrowDropDown color="lightgrey" size={18} />
                    </div>
                </div>
                <div className="flex flex-col justify-center px-2">
                    <span className="font-ember text-xs">Retours</span>
                    <span className="font-emberb text-sm">et commandes</span>
                </div>
                <div className="flex items-baseline px-2">
                    <div className="w-10 relative flex justify-center">
                        <img
                            src={cart}
                            alt="cart icon"
                            className="w-full text-white pr-[6px]"
                        />
                        <span className="absolute top-[-6px] text-orangedark">
                            0
                        </span>
                    </div>
                    <span className="text-sm">Panier</span>
                </div>
            </div>
        </div>
    );
};
export default HeaderTop;
