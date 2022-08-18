const ProductCardDescriptionText = ({ data }) => {
    return (
        <section className="bg-white px-3 py-4 flex flex-col gap-3">
            <h3 className="text-lg font-emberBold">Description</h3>
            <p>{data.description}</p>
        </section>
    );
};
export default ProductCardDescriptionText;
