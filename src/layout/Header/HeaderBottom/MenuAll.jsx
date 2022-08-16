import Hamburger from "../../../components/UI/buttons/Hamburger";

const MenuAll = () => {
    return (
        <div className="hidden sm:hidden md:flex items-center gap-2 px-2 ml-1 hover:cursor-pointer px-2 py-1 hover:outline hover:outline-[1px] outline-white">
            <Hamburger />
            <span className="font-emberBold text-sm">Toutes</span>
        </div>
    );
};
export default MenuAll;
