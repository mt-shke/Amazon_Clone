import LandingBackground from "../components/UI/LandingBackground";
import LandingCard from "../components/UI/LandingCard";

const HomePage = () => {
    return (
        <main className="w-full max-w-[1520px] relative flex flex-col items-center">
            <LandingBackground />
            <section className="grid grid-rows-2 gap-6 z-10">
                <section className="max-h-[420px] grid grid-cols-3 lg:grid-cols-3 items-center gap-6 px-4 bg-dark overflow-hidden xl:grid-cols-4">
                    <LandingCard />
                    <LandingCard />
                    <LandingCard />
                    <LandingCard />
                </section>
            </section>
        </main>
    );
};
export default HomePage;
