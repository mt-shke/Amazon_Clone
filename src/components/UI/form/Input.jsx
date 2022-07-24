const Input = ({ placeholder, type, register }) => {
    return (
        <input
            {...register}
            placeholder={placeholder ?? ""}
            type={type ?? "text"}
            className="w-full border-[1px] border-secondary rounded focus:outline-none text-sm font-emberc px-2 py-1"
        />
    );
};
export default Input;
