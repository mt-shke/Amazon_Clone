import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductPage = () => {
    return (
        <main className="w-full max-w-[1520px] relative flex flex-col items-center">
            <section className="min-w-[1020px] p-2 grid grid-rows-2 gap-6 z-10">
                <div className="text-sm">
                    <Link to="/category/high-tech">
                        <span>{`High-tech`}</span>
                    </Link>
                    {" > "}
                    <Link to="/category/high-tech">
                        <span>{`Téléphones portables et accessoires`}</span>
                    </Link>
                    {" > "}
                    <span>Montres connectées</span>
                </div>
                <ProductCard />
            </section>
        </main>
    );
};
export default ProductPage;
