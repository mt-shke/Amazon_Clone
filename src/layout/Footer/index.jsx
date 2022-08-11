import { Link } from "react-router-dom";
import FooterCGV from "./FooterCGV";
import FooterCountries from "./FooterCountries";
import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="w-full text-secondary font-ember text-sm">
            <section
                onClick={scrollTop}
                className="bg-bg-gray p-4 text-center hover:cursor-pointer hover:bg-bg-lightgrey text-white"
            >
                Retour en haut
            </section>
            <FooterLinks />
            <hr className="border-t-[1px] border-darkgrey" />
            <FooterCountries />
            <FooterServices />
            <FooterCGV />
        </footer>
    );
};
export default Footer;
