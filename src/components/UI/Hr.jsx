const Hr = ({ simple, width }) => {
    let hrWidth = "w-3/4";
    if ((width = "full")) {
        hrWidth = "w-full";
    }
    return (
        <hr
            className={`${hrWidth} h-[2px] bg-gradient-to-r from-white via-bg-main to-white border-none`}
        />
    );
};
export default Hr;
