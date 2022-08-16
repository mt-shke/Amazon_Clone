import HeaderInputMobile from "./mobile/HeaderInputMobile";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = ({ user }) => {
    return (
        <header className="w-full bg-bg-dark text-white">
            <HeaderTop user={user} />
            <HeaderInputMobile />
            <HeaderBottom />
        </header>
    );
};
export default Header;
