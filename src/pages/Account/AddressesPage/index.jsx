import { Link } from "react-router-dom";
import AddressesGrid from "./AddressesGrid";

const AddressesPage = () => {
    return (
        <main className="w-full relative flex flex-col items-center bg-white">
            <section className="w-[960px] flex flex-col gap-4 items-start py-8">
                <div className="text-sm">
                    <Link to="/account">
                        <span>{`Votre compte > `}</span>
                    </Link>

                    <span className="text-orangedarker">Vos adresses</span>
                </div>

                <h2 className="text-3xl">Vos adresses</h2>

                <AddressesGrid />
            </section>
        </main>
    );
};
export default AddressesPage;
