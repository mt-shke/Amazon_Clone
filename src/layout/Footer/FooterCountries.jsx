import logo from "../../assets/amazonlogo.png";

const FooterCountries = () => {
    return (
        <section className="hidden sm:hidden md:flex bg-bg-grey flex-col gap-3 items-center w-full py-8 ">
            <div className="w-20 flex items-center">
                <img src={logo} alt="amazon logo" />
            </div>
            <div>
                <ul className="w-[800px] flex-wrap flex justify-center items-center gap-3 text-xs text-white font-emberLight">
                    <li>
                        <a className="hover:underline" href="">
                            Australie
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Allemagne
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Brésil
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Canada
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Chine
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Espagne
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            États-Unis
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Inde
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Italie
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Japon
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Mexique
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Pays-Bas
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Pologne
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Royaume-Uni
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Émirats arabes unis
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Singapour
                        </a>
                    </li>
                    <li>
                        <a className="hover:underline" href="">
                            Turquie
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};
export default FooterCountries;
