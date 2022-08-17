const BuyButton = ({ children, color, className }) => {
    let style = `${
        className ?? ""
    } w-full text-center font-emberCondensed py-3 bg-yellow-300 hover:from-orangedark hover:to-orange rounded-lg font-emberCondensed text-bg-dark hover:cursor-pointer`;

    if (color === "orange") {
        style =
            "w-full text-center py-3 bg-orangedarker hover:from-secondary hover:to-bg-main rounded font-emberCondensed text-bg-dark hover:cursor-pointer";
    }

    return <div className={style}>{children}</div>;
};
export default BuyButton;
