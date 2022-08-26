import { MdArrowDropDown } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { formatPrice } from "../../../../utils";

const ProductCardPrice = ({ data, buyContainer, mobile }) => {
    const formatedPrice = formatPrice(data.price);
    const [integer, decimals] = formatedPrice.split(",");
    const formatedFullPrice = formatPrice(data.fullPrice);

    const currentPricePt = (100 * data.price) / data.fullPrice;
    const promoPercentage = Math.round(100 - currentPricePt);

    if (mobile) {
        return (
            <div className="flex flex-col gap-1 my-2">
                <div className="flex flex-col text-2xl">
                    <h3 className="font-emberCondensed flex text-4xl">
                        <span className="text-red mr-1 font-emberCondensedLight">{`-${promoPercentage}%`}</span>
                        {integer}
                        <span className="text-sm">{decimals}€</span>
                    </h3>
                    <span className="text-sm opacity-70 flex gap-1">
                        Prix conseillé:{" "}
                        <span className="line-through">
                            {formatedFullPrice}€
                        </span>
                        <AiFillInfoCircle color="grey" size={18} />
                    </span>
                </div>
                <span>
                    {`&`} <span className="text-blue">Retours GRATUITS</span>
                </span>
                <span>Tous les prix incluent la TVA.</span>
            </div>
        );
    }

    if (buyContainer) {
        return (
            <div className="px-2">
                <div className="flex flex-row gap-1 text-2xl">
                    <h3 className="font-emberCondensed flex">
                        {integer}
                        <span className="text-sm">{decimals}€</span>
                    </h3>
                </div>
                <span className="block">
                    {`&`} <span className="text-blue">Retours GRATUITS</span>
                    <MdArrowDropDown
                        className="inline"
                        color="black"
                        size={18}
                    />
                </span>
            </div>
        );
    }

    return (
        <section className="px-2 sm-px-2 md:px-0">
            <div className="flex flex-row gap-2 text-2xl">
                <span className="text-red font-emberCondensedLight">-7%</span>
                <h3 className="font-emberCondensed flex">
                    {integer}
                    <span className="text-sm">{decimals}€</span>
                </h3>
            </div>
            <span className="text-sm opacity-70 flex gap-1">
                Prix conseillé:{" "}
                <span className="line-through">{formatedFullPrice}€</span>
                <AiFillInfoCircle color="grey" size={18} />
            </span>
            <span className="block">
                {`&`} <span className="text-blue">Retours GRATUITS</span>
                <MdArrowDropDown className="inline" color="black" size={18} />
            </span>
            <span className="block">Tous les pris incluent la TVA.</span>
            <span className="block mt-2">
                Payez:{" "}
                <span className="text-red">
                    {formatPrice(data.price / 4)} € X 4
                </span>
                {" ("}
                <span className="line-through">{"8,98"}</span>
                <span className="text-red"> 0 €</span>{" "}
                <span>de frais inclus)</span>{" "}
                <span className="text-blue text-xs">
                    Voir détails et conditions
                </span>
            </span>
        </section>
    );
};
export default ProductCardPrice;
