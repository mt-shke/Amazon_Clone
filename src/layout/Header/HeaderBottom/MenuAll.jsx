const MenuAll = () => {
    return (
        <div className="flex items-center gap-2 px-2 ml-1 hover:cursor-pointer px-2 py-1 hover:outline hover:outline-[1px] outline-white">
            <div className="flex flex-col gap-1">
                <div className="w-4 bg-white h-[2px]"></div>
                <div className="w-4 bg-white h-[2px]"></div>
                <div className="w-4 bg-white h-[2px]"></div>
            </div>
            <span className="font-emberBold text-sm">Toutes</span>
        </div>
    );
};
export default MenuAll;
