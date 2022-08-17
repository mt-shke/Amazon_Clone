import ProductCard from "./ProductCard";

const ProductPage = () => {
    return (
        <main className="w-full max-w-[1520px] bg-bg-main relative flex flex-col items-center">
            {/* <HeaderPageLinks links={["visiter la boutique d'Apple"]} /> */}
            <ProductCard />
        </main>
    );
};
export default ProductPage;
