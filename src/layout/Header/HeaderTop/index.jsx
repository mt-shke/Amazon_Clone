import Logo from "../../../components/UI/Logo";
import HeaderAddress from "./HeaderAddress";
import HeaderInput from "./HeaderInput";
import HeaderLogin from "./HeaderLogin";
import HeaderCommands from "./HeaderCommands";
import HeaderCart from "./HeaderCart";

const HeaderTop = () => {
    return (
        <div className="h-[60px] px-2 flex items-center gap-4">
            <div className="w-24 flex-none">
                <Logo />
            </div>
            <HeaderAddress />
            <HeaderInput />
            <HeaderLogin />
            <HeaderCommands />
            <HeaderCart />
        </div>
    );
};
export default HeaderTop;
