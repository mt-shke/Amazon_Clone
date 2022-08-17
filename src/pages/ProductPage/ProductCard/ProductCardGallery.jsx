const ProductCardGallery = ({ data }) => {
    return (
        <section className="flex flex-col items-center">
            <div className="w-full">
                <img className="w-full" src={data.images.main} alt="watch" />
            </div>
            <div className="flex gap-2 my-4">
                <span className="w-2 aspect-square rounded-full border-[1px] border-secondary bg-secondary"></span>
                <span className="w-2 aspect-square bg-bg-main rounded-full border-[1px] border-secondary"></span>
                <span className="w-2 aspect-square bg-bg-main rounded-full border-[1px] border-secondary"></span>
                <span className="w-2 aspect-square bg-bg-main rounded-full border-[1px] border-secondary"></span>
                <span className="w-2 aspect-square bg-bg-main rounded-full border-[1px] border-secondary"></span>
                <span className="w-2 aspect-square bg-bg-main rounded-full border-[1px] border-secondary"></span>
            </div>
        </section>
    );
};
export default ProductCardGallery;
