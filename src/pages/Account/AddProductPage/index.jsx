import { signOutFromApp } from "../../../firebase";
import AddProductForm from "./AddProductForm";

const AddProductPage = ({ user, fetchUserData }) => {
    const disconnect = () => {
        signOutFromApp();
    };

    return (
        <main className="w-full relative flex flex-col items-center bg-white">
            <section className="w-full max-w-[520px] md:max-w-[620px] flex flex-col gap-4 items-start px-2 py-8">
                <span onClick={disconnect}>{`Se déconnecter`}</span>
                <AddProductForm user={user} />
            </section>
        </main>
    );
};
export default AddProductPage;
