import { v4 as uuidv4 } from "uuid";

const ProductCardDetails = ({ data }) => {
    // todo1 detailsTechniquesPage
    return (
        <section className="bg-white px-3 py-4 flex flex-col gap-3">
            <div>
                <h3 className="text-lg font-emberBold mb-2">
                    Détails & caractéristiques
                </h3>
                <ul className="list-disc px-4">
                    {data.details.detailsList.map((elem, index) => (
                        <li key={uuidv4()}>{elem}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-emberBold mb-2">
                    Informations sur le produit
                </h3>
                <div className="border-t-[1px] border-secondary">
                    {Object.entries(data.details.productInformations)
                        .map((elem) => ({ key: elem[0], value: elem[1] }))
                        .map((item) => (
                            <div
                                key={uuidv4()}
                                className="flex w-full border-b-[1px] border-secondary"
                            >
                                <div className="w-2/5 px-4 py-2 bg-bg-main capitalize">
                                    {item.key}
                                </div>
                                <div className="w-3/5 px-4 py-2">
                                    {item.value}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div>
                <h3 className="text-lg font-emberBold mb-2">
                    Informations complémentaires
                </h3>
                <div className="border-[1px] border-secondary">
                    {Object.entries(data.details.technicalsDetails)
                        .map((elem) => ({ key: elem[0], value: elem[1] }))
                        .map(
                            (item, index) =>
                                index < 3 && (
                                    <div
                                        key={uuidv4()}
                                        className="flex w-full border-b-[1px] border-secondary"
                                    >
                                        <div className="w-2/5 px-4 py-2 bg-bg-main capitalize">
                                            {item.key}
                                        </div>
                                        <div className="w-3/5 px-4 py-2">
                                            {item.value}
                                        </div>
                                    </div>
                                )
                        )}
                    <div>
                        <span className="p-4 block text-blue">
                            Voir tous les détails techniques
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProductCardDetails;
