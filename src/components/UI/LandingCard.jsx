import modeImg from "../../assets/img/theme/mode.jpg";

const LandingCard = () => {
    return (
        <article className="h-[420px] min-w-[266px] flex flex-col gap-1 p-5 bg-white border-black border-1">
            <h2 className="text-lg">Abonnement Amazon Prime</h2>
            <div className="h-[400px] flex-auto">
                <img className="h-full w-full" src={modeImg} alt="mode" />
            </div>
            <span className="font-ember text-base">Découvrir</span>
        </article>
    );
};
export default LandingCard;
