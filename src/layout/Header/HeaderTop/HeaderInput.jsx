import { AiOutlineSearch } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";

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

const HeaderInput = () => {
    return (
        <div className="w-full min-w-[400px] text-bg-dark flex overflow-hidden rounded">
            <select class="text-xs font-ember flex-none flex flex-row bg-bg-mainlight">
                <option selected>Toutes nos catégories</option>
                {ddOptions.map((opt) => (
                    <option>{`${opt}`}</option>
                ))}
                {/* <MdArrowDropDown color="black" size={18} /> */}
            </select>
            <input
                type="text"
                className="w-full hover:border-w-1 border-orange"
            />
            <div className="p-2 grid place-items-center font-bold text-bg-dark bg-orange">
                <AiOutlineSearch size={22} />
            </div>
        </div>
    );
};
export default HeaderInput;
