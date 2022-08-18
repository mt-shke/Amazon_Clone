import AmazonChoice from "../../../components/UI/product/AmazonChoice";
import ProductCardRating from "./mobile//ProductCardRating";
import ProductCardPaymentType from "./mobile/ProductCardPaymentType";
import ProductCardBuy from "./mobile/ProductCardBuy";
import ProductCardSectionSpecifications from "./mobile/ProductCardSectionSpecifications";
import ProductCardPrice from "./mobile/ProductCardPrice";
import ProductCardGallery from "./mobile/ProductCardGallery";
import ProductCardDetails from "./mobile/ProductCardDetails";
import ProductCardDetailsSpecs from "./mobile/ProductCardDetails/ProductCardDetailsSpecs";
import ProductCardDescriptionImages from "./mobile/ProductCardDescription/ProductCardDescriptionImages";
import ProductCardDescriptionText from "./mobile/ProductCardDescription/ProductCardDescriptionText";
import useResponsive from "../../../hooks/useResponsive.js";
import ProductCardDesktopGallery from "./desktop/ProductCardDesktopGallery";
import ProductCardDesktopHeaderModel from "./desktop/ProductCardDesktopHeaderModel";
import ProductCardDesktopDetails from "./desktop/ProductCardDesktopDetails";
import ProductCardDesktopTechnicalsDetails from "./desktop/ProductCardDesktopTechnicalsDetails";
import ProductCardDesktopDescriptionImages from "./desktop/ProductCardDesktopDescriptionImages";

const ProductCard = ({ data }) => {
    const { mobile, desktop } = useResponsive();

    if (mobile) {
        return (
            <article className="flex flex-col bg-bg-main gap-2">
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
    }

    return (
        <article className="flex flex-col w-[968px] my-6">
            <section className="bg-white flex gap-4">
                <ProductCardDesktopGallery data={data} />
                <section className="p-2 min-w-[400px] flex flex-auto flex-col">
                    <h2 className="text-lg font-ember">
                        {`Apple Watch Series 7 (GPS) Boîtier en Aluminium Minuit de 41 mm, Bracelet Sport Minuit - Regular`}
                    </h2>
                    <span className="text-blue">
                        Visiter la boutique d'Apple
                    </span>
                    <ProductCardRating data={data} />
                    <div className="flex flex-row gap-4">
                        <AmazonChoice />
                        <span>
                            pour
                            <span className="text-sm text-blue">{` "apple watch serie 7 41mm`}</span>
                        </span>
                    </div>

                    <hr className="h-[1px] my-4 w-full bg-secondary border-none" />
                    <ProductCardPrice data={data} />
                    <ProductCardDesktopHeaderModel />
                    <ProductCardDesktopDetails data={data} />
                </section>
                <section className="min-w-[280px] h-fit border-[1px] border-secondary rounded py-4 px-1">
                    <ProductCardPrice data={data} buyContainer={true} />
                    <ProductCardBuy data={data} />
                </section>
            </section>

            <ProductCardDesktopDescriptionImages data={data} />
            <ProductCardDesktopTechnicalsDetails data={data} />
        </article>
    );
};
export default ProductCard;
