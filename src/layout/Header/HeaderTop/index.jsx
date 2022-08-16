import Logo from "../../../components/UI/Logo";
import HeaderAddress from "./HeaderAddress";
import HeaderInput from "./HeaderInput";
import HeaderLogin from "./HeaderLogin";
import HeaderCommands from "./HeaderCommands";
import HeaderCart from "./HeaderCart";
import Hamburger from "../../../components/UI/buttons/Hamburger";

const HeaderTop = ({ user }) => {
    return (
        <div
            id="header"
            className="h-[48px] md:h-[60px] p-2 flex items-center gap-2"
        >
            <div className="block sm:block md:hidden">
                <Hamburger />
            </div>
            <a
                href="/"
                className="w-20 sm:w-20 md:w-28 h-full flex-none flex h-full items-end sm:items-end md:items-center flex-none p-1 px-2 hover:cursor-pointer border border-transparent hover:border-white"
            >
                <Logo />
            </a>
            <HeaderAddress user={user} />
            <HeaderInput />
            <HeaderLogin user={user} />
            <HeaderCommands />
            <HeaderCart />
        </div>
    );
};
export default HeaderTop;
