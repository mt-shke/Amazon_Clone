import MenuAll from "./MenuAll";
import NavBarLinks from "./NavBarLinks";

const HeaderBottom = () => {
    return (
        <div className="bg-bg-grey h-[41px] flex items-center px-2 py-2  overflow-x-scroll sm:overflow-x-scroll md:overflow-x-hidden hideScrollbar">
            <MenuAll />
            <NavBarLinks />
        </div>
    );
};
export default HeaderBottom;
