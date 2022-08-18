const ProductCardStock = ({ data }) => {
    const inStock = data.quantity >= 1;

    if (inStock) {
        return (
            <div className="my-4">
                <span className="block text-green-600 text-xl">En stock.</span>
                <span className="text-base font-emberCondensed">Quantité:</span>
                <select
                    placeholder="Qté: 1"
                    name="quantitySelect"
                    id="quantitySelect"
                    className="mx-2 border-secondary border-[1px] rounded text-center"
                >
                    <option disabled>Qté: 1</option>
                    {new Array(data.quantity)
                        .fill("quantity")
                        .map((num, index) => (
                            <option key={num + index}>{index + 1}</option>
                        ))}
                </select>
            </div>
        );
    }
};
export default ProductCardStock;
