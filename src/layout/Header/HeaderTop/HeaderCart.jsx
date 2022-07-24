import cart from "../../../assets/cart.svg";

const HeaderCart = () => {
    return (
        <div className="flex items-center h-full p-1 hover:cursor-pointer border border-transparent hover:border-white">
            <div className="w-10 relative flex justify-center">
                <img
                    src={cart}
                    alt="cart icon"
                    className="w-full text-white pr-[6px]"
                />
                <span className="absolute top-[-6px] text-orangedark">15</span>
            </div>
            <span className="text-sm">Panier</span>
        </div>
    );
};
export default HeaderCart;
