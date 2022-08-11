const FooterCGV = () => {
    return (
        <section className="grid place-items-center pb-8 bg-bg-dark text-white text-xs font-emberLight">
            <ul className="flex gap-4">
                <li className="whitespace-nowrap hover:underline">
                    <a href="">Conditions générales de vente</a>
                </li>
                <li className="whitespace-nowrap hover:underline">
                    <a href="">Vos informations personnelles</a>
                </li>
                <li className="whitespace-nowrap hover:underline">
                    <a href="">Cookies</a>
                </li>
                <li className="whitespace-nowrap hover:underline">
                    <a href="">Annonces basées sur vos centres d’intérêt</a>
                </li>
                <li className="whitespace-nowrap">
                    © 1996-2022, Amazon.com Inc. ou ses affiliés
                </li>
            </ul>
        </section>
    );
};
export default FooterCGV;
