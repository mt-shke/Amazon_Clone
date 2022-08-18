import { v4 as uuidv4 } from "uuid";

const ProductCardDesktopDetails = ({ data }) => {
    // todo1 detailsTechniquesPage
    return (
        <section className="bg-white px-3 py-4 flex flex-col gap-3">
            <div>
                <h3 className="text-lg font-emberBold mb-2 block sm:block md:hidden">
                    Détails & caractéristiques
                </h3>
                <h3 className="text-lg font-emberBold mb-2 hidde sm:hiddeen md:block">
                    À propos de cet article
                </h3>
                <ul className="list-disc px-4">
                    {data.details.detailsList.map((elem, index) => (
                        <li key={uuidv4()}>{elem}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
export default ProductCardDesktopDetails;
