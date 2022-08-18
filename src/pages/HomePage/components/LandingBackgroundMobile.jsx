import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import watch from "../../../assets/img/watch/img_0.jpg";

const LandingBackgroundMobile = ({ data }) => {
    const imgs = [...data];
    const [imgIndex, setImgIndex] = useState(0);
    const [slideStyle, setSlideStyle] = useState("");

    useEffect(() => {
        return () => {
            setInterval(() => {
                slideRight();
            }, 5000);
        };
    }, [imgIndex]);

    const slideRight = () => {
        setImgIndex((p) => (p === 3 ? 0 : p + 1));
        setSlideStyle("animate-slide-right");
        setTimeout(() => {
            setSlideStyle("");
        }, 1000);
    };

    const leftButtonHandler = () => {
        setImgIndex((p) => (p === 0 ? 3 : p - 1));
        setSlideStyle("animate-slide-left");
    };

    const rightButtonHandler = () => {
        setImgIndex((p) => (p === 3 ? 0 : p + 1));
        setSlideStyle("animate-slide-right");
    };

    return (
        <section className="relative w-full">
            <div
                className={`${slideStyle} relative w-full aspect-square flex justfiy-center items-center pb-20`}
            >
                <img
                    className="w-full aspect-square"
                    src={imgs[imgIndex]}
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
