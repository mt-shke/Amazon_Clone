const FooterCGV = () => {
    return (
        <section className="grid place-items-center py-10 bg-bg-dark text-white text-xs font-emberLight">
            <ul className="flex flex-col sm:flex-col md:flex-row gap-1 items-center md:gap-4">
                <li className="whitespace-nowrap hover:underline">
                    <a href="">Conditions générales de vente</a>
                </li>
                <li className="whitespace-nowrap hover:underline flex gap-2 md:gap-4">
                    <a href="">Vos informations personnelles</a>
                    <a href="">Cookies</a>
                </li>
                <li className="whitespace-nowrap hover:underline">
                    <a href="">Annonces basées sur vos centres d’intérêt</a>
                </li>
                <li className="whitespace-nowrap mt-3 sm:mt-3 md:mt-0">
                    © 1996-2022, Amazon.com Inc. ou ses affiliés
                </li>
            </ul>
        </section>
    );
};
export default FooterCGV;
