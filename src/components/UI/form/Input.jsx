import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { categories } from "../../../data";

const Input = ({
    placeholder,
    type,
    register,
    inputname,
    error,
    defaultValue,
    inputCategory,
}) => {
    const [isValueVisible, setIsValueVisible] = useState(
        type === "password" ? false : true
    );

    if (inputCategory) {
        return (
            <>
                <select
                    {...register(inputname)}
                    className="w-full h-8 border-[1px] border-secondary outline-none"
                >
                    {InputOptions.map((opt, index) => (
                        <option
                            className="text-black text-sm bg-bg-main font-emberDisplay"
                            key={index}
                        >{`${opt}`}</option>
                    ))}
                </select>

                {!!error && (
                    <p className="text-sm text-red font-emberCondensed mt-2">
                        {error}
                    </p>
                )}
            </>
        );
    }

    return (
        <>
            <div className="relative flex items-center w-full">
                <input
                    className={`w-full border-[1px] border-secondary rounded focus:outline-none text-base font-emberCondensed px-2 py-1 ${
                        type === "password" ? "pr-8" : ""
                    }`}
                    {...register(inputname)}
                    placeholder={placeholder ?? ""}
                    type={isValueVisible ? "text" : "password"}
                    defaultValue={defaultValue ?? ""}
                />
                {type === "password" && (
                    <div className="absolute right-3">
                        {!!isValueVisible ? (
                            <HiEyeOff
                                className="hover:cursor-pointer"
                                size={16}
                                color="black"
                                onClick={() => setIsValueVisible((p) => !p)}
                            />
                        ) : (
                            <HiEye
                                className="hover:cursor-pointer"
                                size={16}
                                color="black"
                                onClick={() => setIsValueVisible((p) => !p)}
                            />
                        )}
                    </div>
                )}
            </div>

            {!!error && (
                <p className="text-sm text-red font-emberCondensed mt-2">
                    {error}
                </p>
            )}
        </>
    );
};

export default Input;

const InputOptions = ["Catégorie de l'article", ...categories];
