import Logo from "../../../components/UI/Logo";
import HeaderAddress from "./HeaderAddress";
import HeaderInput from "./HeaderInput";
import HeaderLogin from "./HeaderLogin";
import HeaderCommands from "./HeaderCommands";
import HeaderCart from "./HeaderCart";

const HeaderTop = () => {
    return (
        <div className="h-[60px] p-1 flex items-center gap-2">
            <a
                href="/"
                className="flex-none flex w-28 h-full items-center flex-none p-1 px-2 hover:cursor-pointer border border-transparent hover:border-white"
            >
                <Logo />
            </a>
            <HeaderAddress />
            <HeaderInput />
            <HeaderLogin />
            <HeaderCommands />
            <HeaderCart />
        </div>
    );
};
export default HeaderTop;
