import { AccountGridItem } from "./AccountGrid";

const SellerGrid = () => {
    return (
        <section className="w-full grid-auto-cols sm:grid-auto-cols md:min-w-[960px] grid md:grid-cols-3 gap-4 ">
            {sellerItems.map((item, index) => (
                <AccountGridItem key={item.title + index} item={item} />
            ))}
        </section>
    );
};

export default SellerGrid;

const sellerItems = [
    {
        imgUrl: "../src/assets/img/accountPage/commands.png",
        title: "Ajouter un produit",
        description: "Ajouter un produit",
        link: "/add-product",
    },
];