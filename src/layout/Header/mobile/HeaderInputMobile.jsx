import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const HeaderInputMobile = () => {
    const [selection, setSelection] = useState("");

    return (
        <div className="w-full flex sm:flex md:hidden h-[48px] px-1 bg-bg-grey sm:bg-bg-grey">
            <div
                className={`relative flex w-full text-bg-dark overflow-hidden rounded-lg border-[2px] border-${
                    selection.length ? "orange" : "transparent"
                }`}
            >
                <input
                    type="text"
                    className="w-full pl-2 pr-14 text-sm hover:border-w-1 border-orange outline-none font-emberDisplay"
                />
                <div className="p-3 absolute right-0 grid place-items-center font-bold text-bg-dark bg-orange rounded-md">
                    <AiOutlineSearch size={24} />
                </div>
            </div>
        </div>
    );
};

export default HeaderInputMobile;

const ddOptions = [
    "Toutes nos catégories",
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
    "Boutique chèques-cadeaux",
    "Boutique Kindle",
    "Bricolage",
    "Bébé & Puériculture",
    "Chaussures et Sacs",
    "Cuisine & Maison",
    "DVD & Blu-ray",
    "Epicerie",
];
