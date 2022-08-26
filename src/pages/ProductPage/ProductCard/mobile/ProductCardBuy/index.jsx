import { HiOutlineLocationMarker } from "react-icons/hi";
import ProductCardStock from "./ProductCardStock";
import BuyButton from "../../../../../components/UI/buttons/BuyButton";
import ProductCardPrice from "../ProductCardPrice";

const ProductCardBuy = ({ data }) => {
    const price = data.delivery.price === 0 ? "GRATUITE" : data.delivery.price;
    // todo date
    return (
        <section className="bg-white p-3">
            <section className="flex gap-4 m-1 p-4 border-[1px] border-secondary rounded">
                <div className="w-10 aspect-square h-fit rounded-full border-blue border-[9px] bg-white"></div>

                <div>
                    <div>
                        <span className="font-emberBold text-lg">
                            Acheter neuf
                        </span>

                        <ProductCardPrice data={data} mobile={true} />
                        <span className="block font-ember text-blue">
                            Livraison <span className="uppercase">{price}</span>{" "}
                            <span className="text-black font-emberCondensedBold">
                                samedi 20 août.{" "}
                            </span>
                            Details
                        </span>
                        <p className="my-4">
                            Ou livraison accélérée{" "}
                            <span className="font-emberCondensedBold">
                                vendredi 19 août.
                            </span>
                            Commandez dans les 7 h 36 min. Détails
                        </p>

                        <span className="flex gap-1 text-blue">
                            <HiOutlineLocationMarker
                                color="black"
                                size={20}
                                className="h-full aspect-square"
                            />
                            Entrez votre adresse
                        </span>
                    </div>
                    <ProductCardStock data={data} />
                    <BuyButton className="my-2">Ajouter au panier</BuyButton>
                    <BuyButton color="orange" className="my-2">
                        Acheter maintenant
                    </BuyButton>
                    {/* todo icon */}
                    <span className="text-blue my-4 block">
                        Transaction sécuriseé
                    </span>

                    <div>
                        <div className="grid grid-cols-2">
                            <span className="opacity-70">Expédié par</span>
                            <span>{data.delivery.exporter}</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="opacity-70">Vendu par</span>{" "}
                            <span>{data.seller}</span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <span>
                            Assistance:{" "}
                            <span className="text-blue">
                                Assistance produit Amazon gratuite incluse
                            </span>
                        </span>
                    </div>
                </div>
            </section>
        </section>
    );
};
export default ProductCardBuy;
