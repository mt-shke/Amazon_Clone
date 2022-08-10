const Button = ({ children, color }) => {
    let style =
        "w-full text-center px-6 py-1 bg-gradient-to-t from-orange to-orangelight hover:from-orangedark hover:to-orange border-[0.4px] border-third rounded font-emberCondensed text-bg-dark hover:cursor-pointer";

    if (color === "grey") {
        style =
            "w-full text-center px-6 py-1 bg-gradient-to-t from-bg-main to-bg-mainlight hover:from-secondary hover:to-bg-main border-[0.4px] border-third rounded font-emberCondensed text-bg-dark hover:cursor-pointer";
    }

    return <span className={style}>{children}</span>;
};
export default Button;
