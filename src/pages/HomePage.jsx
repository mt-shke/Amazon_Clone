import LandingBackground from "../components/UI/LandingBackground";
import LandingCard from "../components/UI/LandingCard";
import modeImg from "../assets/img/theme/mode.jpg";
import prepareImg from "../assets/img/theme/prepare.jpg";
import listenImg from "../assets/img/theme/listen.jpg";
import audiblePromo from "../assets/img/theme/audible_promo.jpg";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [modal, setModal] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setModal(false);
        }, 1500);
    }, []);

    const newArr = new Array(4)
        .fill(true)
        .map((item, index) => <Sect key={index} />);

    return (
        <main className="w-full max-w-[1520px] relative flex flex-col items-center">
            <LandingBackground />
            <section className="grid grid-rows-2 gap-6 z-10">{newArr}</section>
            {modal && <Modal />}
        </main>
    );
};
export default HomePage;

const Sect = () => (
    <section className="max-h-[420px] grid grid-cols-3 lg:grid-cols-3 items-center gap-6 px-4 bg-dark overflow-hidden xl:grid-cols-4">
        <LandingCard
            title="Abonnement Amazon Prime"
            img={modeImg}
            text="Découvrir"
        />
        <LandingCard
            title="Preparez-vous pour la rentrée"
            img={prepareImg}
            text="Voir plus"
        />
        <LandingCard
            title="Ecoutez des livres audio gratuis"
            img={listenImg}
            text="En savoir plus"
        />
        <LandingCard
            title="1 livre audio offert avec Audible"
            img={audiblePromo}
            text="Je profite de cette offre"
        />
    </section>
);

const Modal = () => {
    return (
        <>
            <Overlay />
            <div className="fixed grid place-items-center z-50 top-0 left-0 bottom-0 right-0">
                <div className="w-[20%] flex flex-col gap-6 items-center p-6 bg-white rounded-lg">
                    <h3 className="text-darkgrey">Work in progress...</h3>
                    <div className="animate-spin w-10 h-10 border-black border-b-2 rounded-full"></div>
                </div>
            </div>
        </>
    );
};

const Overlay = () => {
    return (
        <div className="fixed z-40 top-0 left-0 bottom-0 right-0 bg-black opacity-50"></div>
    );
};
