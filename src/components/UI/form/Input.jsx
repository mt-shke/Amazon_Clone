import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Input = ({ placeholder, type, register, inputName, error }) => {
    const [isValueVisible, setIsValueVisible] = useState(
        type === "password" ? false : true
    );

    return (
        <>
            <div className="relative flex items-center w-full">
                <input
                    className="w-full border-[1px] border-secondary rounded focus:outline-none text-base font-emberCondensed px-2 py-1"
                    {...register(inputName)}
                    placeholder={placeholder ?? ""}
                    type={isValueVisible ? "text" : "password"}
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
