const FooterServices = () => {
    return (
        <div className="bg-bg-dark grid place-items-center text-secondary text-xxs font-emberl">
            <div className="w-[980px] grid grid-cols-5 gap-4 px-4 py-8 justify-center">
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberb">
                        Amazon Music
                    </h6>
                    <span>Ecoutez des millions de chansons</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberb">AbeBooks</h6>
                    <span>{`Livres, art & articles de collection`}</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberb">
                        Amazon Web Services
                    </h6>
                    <span>Services de Cloud Computing Flexibles</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberb">Audible</h6>
                    <span>Livres audio télécharger</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberb">
                        {" "}
                        Book Depository{" "}
                    </h6>
                    <span> Livres expédiés dans le monde entier </span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberb">
                        Kindle Direct Publishing
                    </h6>
                    <span>
                        Auto-publiez facilement vos livres au format numérique
                    </span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberb">
                        Offres Reconditionnées
                    </h6>
                    <span>Bonnes affaires</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberb">Shopbop</h6>
                    <span>{`Vêtements de Marque & Mode`}</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberb">
                        Amazon Advertising
                    </h6>
                    <span>Ciblez, attirez et fidélisez vos clients</span>
                </span>
                <span className="flex flew-wrap flex-col w-[100px] hover:underline hover:cursor-pointer">
                    <h6 className="whitespace-nowrap font-emberb">
                        Amazon Business
                    </h6>
                    <span>
                        Paiement 30 jours. Hors TVA. Pour les professionnels.
                    </span>
                </span>
            </div>
        </div>
    );
};
export default FooterServices;