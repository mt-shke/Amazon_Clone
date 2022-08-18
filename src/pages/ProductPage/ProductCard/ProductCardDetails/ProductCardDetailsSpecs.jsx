import { v4 as uuidv4 } from "uuid";

const ProductCardDetailsSpecs = ({ data }) => {
    return (
        <section className="bg-white py-4 flex flex-col gap-3">
            <div className="px-3">
                <h3 className="text-lg font-emberBold mb-2">Details</h3>
                <div>
                    {Object.entries(data.details.detailsSpecs)
                        .map((elem) => ({ key: elem[0], value: elem[1] }))
                        .map((item) => (
                            <div key={uuidv4()} className="flex w-full">
                                <div className="w-2/5 pr-4 py-2 opacity-70 capitalize">
                                    {item.key}
                                </div>
                                <div className="w-3/5 px-4 py-2">
                                    {item.value}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <hr />

            <p className="px-3 ">
                Nos prix incluent l'éco-participation sur tous les produits
                concernés. Vous voulez recycler votre appareil électrique ou
                électronique gratuitement ?{" "}
                <span className="text-blue">En apprendre plus</span>
            </p>
        </section>
    );
};
export default ProductCardDetailsSpecs;
