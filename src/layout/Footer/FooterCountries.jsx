import logo from "../../assets/amazonlogo.png";

const FooterCountries = () => {
    return (
        <div className="bg-bg-grey flex flex-col gap-3 items-center w-full py-8 ">
            <div className="w-20 flex items-center">
                <img src={logo} alt="amazon logo" />
            </div>
            <div>
                <ul className="w-[800px] flex-wrap flex justify-center items-center gap-3 text-xs text-white font-emberl">
                    <li>Australie</li>
                    <li>Allemagne</li>
                    <li>Brésil</li>
                    <li>Canada</li>
                    <li>Chine</li>
                    <li>Espagne</li>
                    <li>États-Unis</li>
                    <li>Inde</li>
                    <li>Italie</li>
                    <li>Japon</li>
                    <li>Mexique</li>
                    <li>Pays-Bas</li>
                    <li>Pologne</li>
                    <li>Royaume-Uni</li>
                    <li>Émirats arabes unis</li>
                    <li>Singapour</li>
                    <li>Turquie</li>
                </ul>
            </div>
        </div>
    );
};
export default FooterCountries;
