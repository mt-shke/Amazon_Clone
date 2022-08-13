import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useUserData from "../../../hooks/useUserData";
import AddressesGrid from "./AddressesGrid";
import SuccessAddressMessage from "./SuccessAddressMessage";

const AddressesPage = ({ user }) => {
    const { userData, update } = useUserData(user.userUid);

    const { search } = useLocation();
    let showMessage = false;

    if (search === "?message=AddressSuccess") {
        showMessage = true;
    }

    useEffect(() => {
        if (search === "?message=AddressSuccess") {
            update();
        }
    }, []);

    console.log("userIs", user);
    console.log("userDataIs", userData);

    return (
        <main className="w-full relative flex flex-col items-center bg-white">
            <section className="w-[960px] flex flex-col gap-4 items-start py-8">
                <div className="text-sm">
                    <Link to="/account">
                        <span>{`Votre compte > `}</span>
                    </Link>
                    <span className="text-orangedarker">Vos adresses</span>
                </div>
                {!!showMessage && <SuccessAddressMessage />}
                <h2 className="text-3xl">Vos adresses</h2>
                <AddressesGrid
                    user={{ ...user, ...userData }}
                    update={update}
                />
            </section>
        </main>
    );
};
export default AddressesPage;
