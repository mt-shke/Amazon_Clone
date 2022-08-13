import pogmentary from "../../assets/img/bg/pogmentary.jpg";
import rentree from "../../assets/img/bg/rentree.jpg";
import toys from "../../assets/img/bg/toys.jpg";
import ship from "../../assets/img/bg/ship.jpg";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useEffect, useState } from "react";

const LandingBackground = () => {
    const imgs = [pogmentary, rentree, toys, ship];
    const [imgIndex, setImgIndex] = useState(0);
    const [slideStyle, setSlideStyle] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setSlideStyle("");
        }, 200);
    }, [slideStyle]);

    const leftButtonHandler = () => {
        setImgIndex((p) => (p === 0 ? 3 : p - 1));
        setSlideStyle("animate-slide-l");
    };

    const rightButtonHandler = () => {
        setImgIndex((p) => (p === 3 ? 0 : p + 1));
        setSlideStyle("animate-slide-r");
    };

    return (
        <section className="relative w-full">
            <div
                className={`${slideStyle} w-full min-w-[1000px] h-[600px] flex justfiy-center items-center absolute`}
            >
                <img
                    className="w-full h-full object-cover object-center absolute"
                    src={imgs[imgIndex]}
                    alt="Pogba documentaire image"
                />
                <div className="absolute h-[50%] bottom-0 w-full bg-gradient-to-b from-transparent to-bg-main"></div>
            </div>
            <div className="h-64 z-20 flex justify-between py-[1px]">
                <button
                    onClick={leftButtonHandler}
                    className="h-full w-20 relative grid place-items-center rounded border-white focus:border-2 focus:after:border-teal focus:after:border-2 focus:after:content-[''] focus:after:w-full focus:after:absolute focus:after:h-full"
                >
                    <HiOutlineChevronLeft size={50} color="black" />
                </button>
                <button
                    onClick={rightButtonHandler}
                    className="h-full w-20 relative grid place-items-center rounded border-white focus:border-2 focus:after:border-teal focus:after:border-2 focus:after:content-[''] focus:after:w-full focus:after:absolute focus:after:h-full"
                >
                    <HiOutlineChevronRight size={50} color="black" />
                </button>
            </div>
        </section>
    );
};
export default LandingBackground;
