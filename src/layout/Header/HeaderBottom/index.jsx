import MenuAll from "./MenuAll";
import NavBarLinks from "./NavBarLinks";

const HeaderBottom = () => {
    return (
        <div className="bg-bg-grey h-[41px] flex items-center overflow-hidden">
            <MenuAll />
            <NavBarLinks />
        </div>
    );
};
export default HeaderBottom;
