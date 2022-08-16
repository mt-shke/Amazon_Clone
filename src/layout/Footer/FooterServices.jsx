const FooterServices = () => {
    return (
        <section className="hidden sm:hidden md:grid bg-bg-dark place-items-center text-secondary text-xxs font-emberLight">
            <div className="w-[980px] grid grid-cols-5 gap-4 px-4 py-8 justify-center">
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberBold">
                        Amazon Music
                    </h6>
                    <span>Ecoutez des millions de chansons</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberBold">
                        AbeBooks
                    </h6>
                    <span>{`Livres, art & articles de collection`}</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberBold">
                        Amazon Web Services
                    </h6>
                    <span>Services de Cloud Computing Flexibles</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberBold">
                        Audible
                    </h6>
                    <span>Livres audio télécharger</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberBold">
                        {" "}
                        Book Depository{" "}
                    </h6>
                    <span> Livres expédiés dans le monde entier </span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberBold">
                        Kindle Direct Publishing
                    </h6>
                    <span>
                        Auto-publiez facilement vos livres au format numérique
                    </span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberBold">
                        Offres Reconditionnées
                    </h6>
                    <span>Bonnes affaires</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberBold">
                        Shopbop
                    </h6>
                    <span>{`Vêtements de Marque & Mode`}</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberBold">
                        Amazon Advertising
                    </h6>
                    <span>Ciblez, attirez et fidélisez vos clients</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberBold">
                        Amazon Business
                    </h6>
                    <span>
                        Paiement 30 jours. Hors TVA. Pour les professionnels.
                    </span>
                </span>
            </div>
        </section>
    );
};
export default FooterServices;
