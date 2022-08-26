import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";

const HeaderInput = () => {
    const [selection, setSelection] = useState("");
    const [focus, setFocus] = useState(false);

    return (
        <div
            className={`hidden sm:hidden md:flex w-full min-w-[280px] text-bg-dark overflow-hidden rounded-md border-[3px] border-${
                focus ? "orange" : "transparent"
            } outline-none text-sm"
            }`}
        >
            <div
                className={`hidden sm:hidden md:flex relative z-10 flex-row items-center gap-1 px-2 flex-initial w-fit bg-bg-mainlight hover:bg-gray-300 text-xs font-emberDisplay hover:cursor-pointer`}
            >
                <span className="block whitespace-nowrap">
                    {selection ? selection : ddOptions[0]}
                </span>
                <MdArrowDropDown color="black" size={18} />

                <select
                    onChange={(e) => [
                        setSelection(e.target.value),
                        e.target.blur(),
                        e.target.parentNode.nextSibling.focus(),
                    ]}
                    className="absolute px-1 inset-0 bg-transparent text-transparent flex w-full h-full bg-bg-orange font-ember hover:cursor-pointer outline-none border-[3px] border-transparent focus:border-orange rounded-l-md"
                >
                    {ddOptions.map((opt, index) => (
                        <option
                            className="text-black text-sm bg-bg-main font-emberDisplay"
                            key={index}
                        >{`${opt}`}</option>
                    ))}
                </select>
            </div>

            <input
                onFocus={() => setFocus((p) => true)}
                onBlur={() => setFocus((p) => false)}
                type="text"
                className="w-full px-2 text-base outline-none font-emberDisplay"
            />
            <div className="p-2 grid place-items-center font-bold text-bg-dark bg-orange hover:cursor-pointer hover:bg-orangedark">
                <AiOutlineSearch size={22} />
            </div>
        </div>
    );
};

export default HeaderInput;

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
    "Jardin",
    "Jeux et Jouets",
    "Jeux vidéo",
    "Livres",
    "Livres audio Audible",
    "Logiciels",
    "Luminaires et Eclairage",
    "Luxury Stores",
    "Mode",
    "Moins de 10€",
    "Monoprix",
    "Montres",
    "Musique : CD & Vinyles",
    "Musique classique",
    "Prime Video",
    "Jardin",
    "Prévoyez et Economisez",
    "Secteur industriel et scientifique",
    "Sports et Loisirs",
    "Téléchargement de musique",
    "Vêtements et accessoires",
];
