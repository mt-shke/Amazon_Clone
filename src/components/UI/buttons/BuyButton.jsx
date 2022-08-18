const BuyButton = ({ children, color, className }) => {
    let bgStyle = "bg-yellow-300";
    if (color === "orange") {
        bgStyle = "bg-orangedarker";
    }
    const style = `${
        className ?? ""
    } ${bgStyle} w-full text-center font-emberCondensed py-3 sm:py-3 md:py-1 hover:from-orangedark hover:to-orange rounded-lg sm:rounded-lg md:rounded-full font-emberCondensed text-bg-dark hover:cursor-pointer`;

    return <div className={style}>{children}</div>;
};
export default BuyButton;
