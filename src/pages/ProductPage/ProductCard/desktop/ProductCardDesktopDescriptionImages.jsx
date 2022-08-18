const ProductCardDesktopDescriptionImages = ({ data }) => {
    return (
        <section className="w-full grid place-items-center">
            {!!data.descriptionImagesDesktop.length &&
                data.descriptionImagesDesktop.map((elem, index) => (
                    <div>
                        <img className="w-full" src={elem} alt={data.name} />
                    </div>
                ))}
        </section>
    );
};
export default ProductCardDesktopDescriptionImages;
