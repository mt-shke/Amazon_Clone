import HeaderInputMobile from "./mobile/HeaderInputMobile";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import DeliveryAddress from "./mobile/DeliveryAddress";

const Header = ({ user }) => {
    return (
        <header className="w-full bg-bg-grey sm:bg-bg-grey md:bg-bg-dark text-white">
            <HeaderTop user={user} />
            <HeaderInputMobile />
            <HeaderBottom />
            <DeliveryAddress user={user} />
        </header>
    );
};
export default Header;
