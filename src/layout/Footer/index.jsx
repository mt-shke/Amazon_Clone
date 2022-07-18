import FooterCGV from "./FooterCGV";
import FooterCountries from "./FooterCountries";
import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";

const Footer = () => {
    return (
        <footer className="w-full text-secondary font-ember text-sm">
            <div className="bg-bg-gray p-4 text-center hover:cursor-pointer hover:bg-bg-lightgrey text-white">
                Retour en haut
            </div>
            <FooterLinks />
            <hr className="border-t-[1px] border-darkgrey" />
            <FooterCountries />
            <FooterServices />
            <FooterCGV />
        </footer>
    );
};
export default Footer;
