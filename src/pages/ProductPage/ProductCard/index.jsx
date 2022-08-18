import AmazonChoice from "../../../components/UI/product/AmazonChoice";
import ProductCardRating from "./ProductCardRating";
import ProductCardPaymentType from "./ProductCardPaymentType";
import ProductCardBuy from "./ProductCardBuy";
import ProductCardSectionSpecifications from "./ProductCardSectionSpecifications";
import ProductCardPrice from "./ProductCardPrice";
import ProductCardGallery from "./ProductCardGallery";
import ProductCardDetails from "./ProductCardDetails";
import ProductCardDetailsSpecs from "./ProductCardDetails/ProductCardDetailsSpecs";
import ProductCardDescriptionImages from "./ProductCardDescription/ProductCardDescriptionImages";
import ProductCardDescriptionText from "./ProductCardDescription/ProductCardDescriptionText";

const ProductCard = ({ data }) => {
    return (
        <article className="flex flex-col gap-2">
            <section className="bg-white">
                <section className="p-2">
                    <span className="text-blue">
                        Visiter la boutique d'Apple
                    </span>
                    <h2 className="text-lg font-emberBold">
                        {`Apple Watch Series 7 (GPS) Boîtier en Aluminium Minuit de 41 mm, Bracelet Sport Minuit - Regular`}
                    </h2>

                    <ProductCardRating data={data} />
                    <div className="flex flex-row gap-4">
                        <AmazonChoice />
                        <span>
                            pour
                            <span className="text-sm text-blue">{` "apple watch serie 7 41mm`}</span>
                        </span>
                    </div>
                </section>

                <ProductCardGallery data={data} />
                {/* <hr className="h-[1px] my-4 w-full bg-secondary border-none" /> */}

                <ProductCardPrice data={data} />
            </section>

            <ProductCardSectionSpecifications data={data} />
            <ProductCardPaymentType />
            <ProductCardBuy data={data} />
            <ProductCardDetailsSpecs data={data} />
            <ProductCardDescriptionImages data={data} />
            <ProductCardDescriptionText data={data} />
            <ProductCardDetails data={data} />
        </article>
    );
};
export default ProductCard;
