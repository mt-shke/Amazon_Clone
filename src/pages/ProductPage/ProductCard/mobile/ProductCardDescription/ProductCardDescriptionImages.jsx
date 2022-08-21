import { v4 as uuidv4 } from "uuid";

const ProductCardDescriptionImages = ({ data }) => {
    return (
        <section className="bg-white py-4 flex flex-col gap-3">
            <h3 className="text-lg px-3 font-emberBold">
                Descriptions du produit
            </h3>
            <div>
                {!!data.descriptionImages.length &&
                    data.descriptionImages.map((elem, index) => (
                        <div key={uuidv4()}>
                            <img
                                className="w-full"
                                src={elem}
                                alt={data.name}
                            />
                        </div>
                    ))}
            </div>
        </section>
    );
};
export default ProductCardDescriptionImages;
