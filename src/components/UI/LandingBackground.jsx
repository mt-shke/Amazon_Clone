import pogmentary from "../../assets/img/bg/pogmentary.jpg";
import rentree from "../../assets/img/bg/rentree.jpg";
// import { VscChevronLeft } from "react-icons/vs";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const LandingBackground = () => {
    return (
        <section className="relative w-full">
            <div className="w-full min-w-[1000px] h-[600px] flex justfiy-center items-center absolute">
                <img
                    className="w-full h-full object-cover object-center absolute"
                    src={pogmentary}
                    alt="Pogba documentaire image"
                />
                <div className="absolute h-[50%] bottom-0 w-full bg-gradient-to-b from-transparent to-bg-main"></div>
            </div>
            <div className="h-64 z-20 relative flex justify-between py-[1px]">
                <button className="h-full w-20 relative grid place-items-center rounded border-white focus:border-2 focus:after:border-teal focus:after:border-2 focus:after:content-[''] focus:after:w-full focus:after:absolute focus:after:h-full">
                    <HiOutlineChevronLeft size={50} color="black" />
                </button>
                <button className="h-full w-20 relative grid place-items-center rounded border-white focus:border-2 focus:after:border-teal focus:after:border-2 focus:after:content-[''] focus:after:w-full focus:after:absolute focus:after:h-full">
                    <HiOutlineChevronRight size={50} color="black" />
                </button>
            </div>
        </section>
    );
};
export default LandingBackground;