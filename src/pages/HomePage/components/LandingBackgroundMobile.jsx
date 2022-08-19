import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import watch from "../../../assets/img/watch/img_0.jpg";

const LandingBackgroundMobile = ({ data }) => {
    const [currentImg, setCurrentImg] = useState(0);
    const [fadeStyle, setFadeStyle] = useState("");
    const ref = useRef(null);
    let touchStart;

    useEffect(() => {
        const containerRef = ref.current;
        containerRef.addEventListener("touchstart", handleTouchStart);
        containerRef.addEventListener("touchend", handleTouchEnd);
        const interval = setInterval(() => {
            swipeRight();
        }, 20000);

        return () => {
            containerRef.removeEventListener("touchstart", handleTouchStart);
            containerRef.removeEventListener("touchend", handleTouchEnd);
            clearInterval(interval);
        };
    }, []);

    const handleTouchStart = (e) => {
        touchStart = e.changedTouches[0].pageX;
    };

    const clearSlideDirection = () => {
        setTimeout(() => setFadeStyle((p) => ""), 300);
    };

    const handleTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].pageX;
        const swipeDistance = touchEnd - touchStart;
        if (swipeDistance >= 50) {
            swipeLeft();
        }
        if (swipeDistance <= -50) {
            swipeRight();
        }
    };

    const swipeLeft = () => {
        setCurrentImg((p) => (p === 0 ? data.length - 1 : p - 1));
        setFadeStyle((p) => "fadeIn");
        clearSlideDirection();
    };

    const swipeRight = () => {
        setCurrentImg((p) => (p === data.length - 1 ? 0 : p + 1));
        setFadeStyle((p) => "fadeIn");
        clearSlideDirection();
    };

    return (
        <section className="relative w-full pb-20 overflow-hidden">
            <div
                ref={ref}
                className={`absolute w-full aspect-square flex justifiy-center items-center overflow-hidden`}
            >
                <img
                    className={`absolute inset-0 w-full aspect-square animate-${fadeStyle}`}
                    src={data[currentImg]}
                    alt="background image"
                />
                <div className="absolute h-[40%] bottom-0 w-full bg-gradient-to-b from-transparent via-bg-main to-bg-main"></div>
            </div>
            <div className="absolute bottom-0 overflow-x-scroll flex w-full">
                <div className="flex flex-row whitespace-nowrap px-2 gap-2 w-full">
                    <article className="flex flex-col p-2 bg-white font-emberLight text-sm rounded">
                        <h2 className="text-xl font-emberBold">Bienvenue</h2>
                        <span>
                            Identifiez-vous pour
                            <br /> une meilleure expérience
                        </span>
                        {/* <Link to="/login"> */}
                        <div className="bg-orangelight p-2 mt-8 text-sm text-center rounded">
                            Se connecter en toute sécurité
                        </div>
                        {/* </Link> */}
                        {/* <Link to="/register"> */}
                        <span className="text-blue">Créer un compte</span>
                        {/* </Link> */}
                    </article>
                    <Link to="product">
                        <article className="flex-1 p-2 bg-white font-emberLight text-sm rounded">
                            <span>Continuez vos achats de</span>
                            <div className="w-full">
                                <img src={watch} alt="watch" />
                            </div>
                        </article>
                    </Link>
                    <Link to="product">
                        <article className="flex-1 p-2 bg-white font-emberLight text-sm rounded">
                            <span>Continuez vos achats de</span>
                            <div className="w-full">
                                <img src={watch} alt="watch" />
                            </div>
                        </article>
                    </Link>
                </div>
            </div>
            <div className="w-full aspect-square"></div>
        </section>
    );
};
export default LandingBackgroundMobile;
