import { signOutFromApp } from "../../../firebase";

const AddProductPage = ({ user, fetchUserData }) => {
    const disconnect = () => {
        signOutFromApp();
    };

    return (
        <main className="w-full relative flex flex-col items-center bg-white">
            <section className="max-w-[960px] flex flex-col gap-4 items-start py-8">
                <span onClick={disconnect}>{`Se déconnecter`}</span>
                <h2 className="text-3xl">Vos produits en vente</h2>
                <p>En construction...</p>
            </section>
        </main>
    );
};
export default AddProductPage;
