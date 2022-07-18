import modeImg from "../assets/img/theme/mode.jpg";

const HomePage = () => {
    return (
        <main className="w-full bg-dark py-20">
            <section className="grid grid gap-8 bg-dark px-4">
                <article className="min-w-20 w-48 p-5 bg-white border-black border-1">
                    <h2 className="text-xl">Abonnement Amazon Prime</h2>
                    <div className="py-2">
                        <img src={modeImg} alt="mode" />
                    </div>
                    <span className="font-ember text-base">Découvrir</span>
                </article>
            </section>
        </main>
    );
};
export default HomePage;
