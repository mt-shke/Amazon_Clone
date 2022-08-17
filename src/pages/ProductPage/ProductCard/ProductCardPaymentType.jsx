import { MdArrowDropDown } from "react-icons/md";
import img from "../../../assets/img/theme/listen.jpg";

const ProductCardPaymentType = () => {
    return (
        <section className="bg-white">
            <div className=" p-3 flex flex-col gap-1">
                <h3 className="text-xl">Améliorer vos achats</h3>
                <div className="flex items-center">
                    <div className="flex flex-col w-full">
                        <span className="font-ember">AppleCare+</span>
                        <span className="font-emberCondensedLight">
                            de 89,00€
                        </span>
                    </div>
                    <div className="w-10">
                        <img src={img} alt="payment" />
                    </div>
                    <MdArrowDropDown
                        className="inline mr-0"
                        color="black"
                        size={18}
                    />
                </div>
            </div>
        </section>
    );
};
export default ProductCardPaymentType;
