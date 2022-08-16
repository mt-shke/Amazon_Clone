const FooterMobileLinks = () => {
    return (
        <section className="w-full flex sm:flex md:hidden bg-bg-grey justify-between gap-6 px-4 py-10 font-emberCondensed text-base text-white">
            <ul className="flex flex-col gap-5 flex-1">
                <li className="leading-[22px]">
                    <a href="">Page d'accueil d'Amazon.fr</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Chez vous</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Vos commandes</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Vendre sur Amazon</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Créer un compte professionnel gratuit</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Vendez sur Amazon Business</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Information sur notre Marketplace</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Gérer vos abonnements</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Coordonnées 1-Click</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Accessibilité</a>
                </li>
            </ul>
            <ul className="flex flex-col gap-5 flex-1">
                <li className="leading-[22px]">
                    <a href="">Retour</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Services Client</a>
                </li>
                <li className="leading-[22px]">
                    <a href="/account">Votre Compte</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Votre liste</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Trouver une liste</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Trouver un cadeau</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Article que vous avez consultés récemment</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">Télécharger l'application Amazon</a>
                </li>
                <li className="leading-[22px]">
                    <a href="">
                        {`Recyclage (y compris les équipements électruqyes et électroniques)`}
                    </a>
                </li>
            </ul>
        </section>
    );
};
export default FooterMobileLinks;
