const LandingCard = ({ title, img, text }) => {
    return (
        <article className="h-[420px] min-w-[266px] flex flex-col gap-1 p-5 bg-white border-black border-1">
            <h4 className="text-lg">{title}</h4>
            <div className="h-[400px] flex-auto">
                <img className="h-full w-full" src={img} alt="mode" />
            </div>
            <span className="font-ember text-base">{text}</span>
        </article>
    );
};
export default LandingCard;
