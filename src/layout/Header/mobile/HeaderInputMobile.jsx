import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const HeaderInputMobile = () => {
    const [selection, setSelection] = useState("");

    return (
        <div className="w-full flex sm:flex md:hidden h-[48px] px-1">
            <div
                className={`flex w-full text-bg-dark overflow-hidden rounded-md border-[2px] border-${
                    selection.length ? "orange" : "transparent"
                }`}
            >
                <input
                    type="text"
                    className="w-full px-2 text-sm hover:border-w-1 border-orange outline-none font-emberDisplay"
                />
                <div className="p-2 grid place-items-center font-bold text-bg-dark bg-orange">
                    <AiOutlineSearch size={22} />
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
