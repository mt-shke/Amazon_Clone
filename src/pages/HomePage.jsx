import LandingBackground from "../components/UI/LandingBackground";
import LandingCard from "../components/UI/LandingCard";
import modeImg from "../assets/img/theme/mode.jpg";
import prepareImg from "../assets/img/theme/prepare.jpg";
import listenImg from "../assets/img/theme/listen.jpg";
import audiblePromo from "../assets/img/theme/audible_promo.jpg";

const HomePage = () => {
    return (
        <main className="w-full max-w-[1520px] relative flex flex-col items-center">
            <LandingBackground />
            <section className="grid grid-rows-2 gap-6 z-10">
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
            </section>
        </main>
    );
};
export default HomePage;
