import MenuAll from "./MenuAll";
import NavBarLinks from "./NavBarLinks";

const HeaderBottom = () => {
    return (
        <div className="bg-bg-grey h-[39px] flex items-center">
            <MenuAll />
            <NavBarLinks />
        </div>
    );
};
export default HeaderBottom;
