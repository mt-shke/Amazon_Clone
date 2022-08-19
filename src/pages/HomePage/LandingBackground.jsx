import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useEffect, useState } from "react";

const LandingBackground = ({ backgrounds }) => {
    const imgs = [...backgrounds];
    const [imgIndex, setImgIndex] = useState(0);
    const [slideStyle, setSlideStyle] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            slideRight();
        }, 20000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const slideLeft = () => {
        setImgIndex((p) => (p === 0 ? 3 : p - 1));
        setSlideStyle("animate-slide-left");
        clearSlide();
    };

    const slideRight = () => {
        setImgIndex((p) => (p === 3 ? 0 : p + 1));
        setSlideStyle("animate-slide-right");
        clearSlide();
    };

    const clearSlide = () => {
        setTimeout(() => {
            setSlideStyle("");
        }, 200);
    };

    return (
        <section className="relative w-full">
            <div
                className={`${slideStyle} w-full min-w-none sm:min-w-none md:min-w-[1000px] h-[600px] flex justfiy-center items-center absolute`}
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
                    onClick={slideLeft}
                    className="hidden sm:hidden md:grid h-full w-20 relative place-items-center rounded border-white focus:border-2 focus:after:border-teal focus:after:border-2 focus:after:content-[''] focus:after:w-full focus:after:absolute focus:after:h-full"
                >
                    <HiOutlineChevronLeft size={50} color="black" />
                </button>
                <button
                    onClick={slideRight}
                    className="hidden sm:hidden md:grid h-full w-20 relative place-items-center rounded border-white focus:border-2 focus:after:border-teal focus:after:border-2 focus:after:content-[''] focus:after:w-full focus:after:absolute focus:after:h-full"
                >
                    <HiOutlineChevronRight size={50} color="black" />
                </button>
            </div>
        </section>
    );
};
export default LandingBackground;
