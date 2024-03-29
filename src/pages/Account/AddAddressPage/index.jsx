import { Link } from "react-router-dom";
import AddAddressForm from "./AddAddressForm";

const AddAddressPage = ({ user, fetchUserData }) => {
    return (
        <main className="w-full relative flex flex-col items-center bg-white">
            <section className="w-full max-w-[520px] md:max-w-[620px] flex flex-col gap-4 items-start px-2 py-8">
                <div className="text-sm">
                    <Link to="/account">
                        <span>{`Votre compte > `}</span>
                    </Link>
                    <Link to="/account/addresses">
                        <span>{`Vos adresses > `}</span>
                    </Link>
                    <span className="text-orangedarker">Nouvelle adresse</span>
                </div>
                <h2 className="text-3xl">Ajouter une nouvelle adresse</h2>
                <AddAddressForm user={user} />
            </section>
        </main>
    );
};
export default AddAddressPage;
