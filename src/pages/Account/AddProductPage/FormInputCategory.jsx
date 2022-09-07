import { categories } from "../../../data";

const FormInputCategory = ({ register, inputName }) => {
    return (
        <select className="w-full h-8 border-[1px] border-secondary outline-none">
            {InputOptions.map((opt, index) => (
                <option
                    className="text-black text-sm bg-bg-main font-emberDisplay"
                    key={index}
                >{`${opt}`}</option>
            ))}
            {/* <input type="hidden" {...register(inputName)} /> */}
        </select>
    );
};

export default FormInputCategory;

const InputOptions = ["Catégorie de l'article", ...categories];
