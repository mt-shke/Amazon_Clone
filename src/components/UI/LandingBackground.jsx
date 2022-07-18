import pogmentary from "../../assets/img/bg/pogmentary.jpg";
import rentree from "../../assets/img/bg/rentree.jpg";

const LandingBackground = () => {
    return (
        <section className="flex justfiy-center items-center z-1 absolute w-[1000px] h-[600px] overflow-hidden">
            <img
                className="w-full h-full object-cover object-center absolute"
                src={pogmentary}
                alt="Pogba documentaire image"
            />
            <div className="absolute h-[50%] bottom-0 w-full bg-gradient-to-b from-transparent to-bg-main"></div>
        </section>
    );
};
export default LandingBackground;
