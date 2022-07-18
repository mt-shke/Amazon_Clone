import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {
    return (
        <header className="w-full bg-bg-dark text-white overflow-hidden">
            <HeaderTop />
            <HeaderBottom />
        </header>
    );
};
export default Header;
