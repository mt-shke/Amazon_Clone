import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import watch from "../../../assets/img/watch/img_0.jpg";

const LandingBackgroundMobile = ({ data }) => {
    const [currentImg, setCurrentImg] = useState(0);
    const [slideDirection, setSlideDirection] = useState("");
    const ref = useRef(null);
    let touchStart;

    useEffect(() => {
        const containerRef = ref.current;
        containerRef.addEventListener("touchstart", handleTouchStart);
        containerRef.addEventListener("touchend", handleTouchEnd);
        const interval = setInterval(() => {
            swipeRight();
        }, 10000);

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
        setTimeout(() => setSlideDirection((p) => ""), 300);
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
        setSlideDirection((p) => "left");
        clearSlideDirection();
    };

    const swipeRight = () => {
        setCurrentImg((p) => (p === data.length - 1 ? 0 : p + 1));
        setSlideDirection((p) => "right");
        clearSlideDirection();
    };

    return (
        <section className="relative w-full">
            <div
                ref={ref}
                className={`relative w-full aspect-square flex justfiy-center items-center pb-20`}
            >
                <img
                    className={`w-full aspect-square animate-slide-${slideDirection}`}
                    src={data[currentImg]}
                    alt="background image"
                />
                <div className="absolute h-[50%] bottom-0 w-full bg-gradient-to-b from-transparent via-bg-main to-bg-main"></div>
                <div className="w-full absolute bottom-0 flex flex-row pl-2 gap-2">
                    <article className="w-3/5 p-2 bg-white font-emberLight text-sm rounded">
                        <h2 className="text-xl font-emberBold">Bienvenue</h2>
                        <p>Identifiez-vous pour une meilleure expérience</p>
                        {/* <Link to="/login"> */}
                        <div className="bg-orangelight py-2 mt-8 text-sm text-center rounded">
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
                </div>
            </div>
        </section>
    );
};
export default LandingBackgroundMobile;
