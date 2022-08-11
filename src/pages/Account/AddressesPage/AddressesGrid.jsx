import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../../state/AuthContext";

const AddressesGrid = () => {
    const { state } = useContext(AuthContext);

    if (!state.loggedUser) {
        return (
            <section className="w-full grid grid-cols-3 grid-rows-3 gap-4 ">
                <AddAddressItem />
            </section>
        );
    }

    return (
        <section className="w-full grid grid-cols-3 grid-rows-3 gap-4 ">
            <AddAddressItem />
            <AddressItem
                user={state.loggedUser}
                address={userAddresses[0]}
                defaultAddress={true}
            />
            <AddressItem user={state.loggedUser} address={userAddresses[0]} />
            <AddressItem user={state.loggedUser} address={userAddresses[0]} />
            <AddressItem user={state.loggedUser} address={userAddresses[0]} />
            <AddressItem user={state.loggedUser} address={userAddresses[0]} />
        </section>
    );
};
export default AddressesGrid;

const AddAddressItem = () => {
    return (
        <Link to="/account/addresses/add-address">
            <article className="w-full aspect-square flex flex-col justify-center items-center gap-2 p-4 border-2 border-dashed border-secondary rounded-lg hover:bg-bg-mainlight hover:cursor-pointer">
                <IoMdAdd size={62} color="lightgrey" />
                <h3 className="text-2xl font-emberCondensed">
                    Ajouter une adresse
                </h3>
            </article>
        </Link>
    );
};

const AddressItem = ({ address, user, defaultAddress }) => {
    return (
        <article className="w-full aspect-square flex flex-col justify-start items-start border-2 border-secondary rounded-lg hover:bg-bg-mainlight">
            {!!defaultAddress && (
                <div className="w-full flex items-center gap-4 p-2 border-b-[2px] border-secondary text-sm">
                    <span>Par défaut :</span>
                    <div className="w-10">
                        <img src="../src/assets/logo.png" alt="" />
                    </div>
                </div>
            )}
            <div className="w-full h-full flex-1 flex-col flex-base p-4 text-base">
                <ul className="flex flex-col h-[90%]">
                    <li className="font-emberCondensedBold">
                        <span className="uppercase">{user.lastname ?? ""}</span>
                        <span>
                            {` `}
                            {user.firstname ?? ""}
                        </span>
                    </li>
                    <li>
                        <span>{address.street}</span>
                    </li>
                    <li>
                        <span>
                            {address.city}
                            {`, `}
                        </span>
                        <span>{address.zipCode}</span>
                    </li>
                    <li>
                        <span>{address.country}</span>
                    </li>
                    <li>
                        <span>
                            {`Numéro de téléphone: +`}
                            {address.phoneNumber}
                        </span>
                    </li>
                </ul>
                {defaultAddress ? (
                    <div className="text-blue text-sm">
                        <span className="hover:cursor-pointer">{`Modifier | `}</span>
                        <span className="hover:cursor-pointer">{`Effacer`}</span>
                    </div>
                ) : (
                    <div className="text-blue text-sm">
                        <span className="hover:cursor-pointer">{`Effacer | `}</span>
                        <span className="hover:cursor-pointer">{`Définir par défaut`}</span>
                    </div>
                )}
            </div>
        </article>
    );
};

const userAddresses = [
    {
        street: "32 Avenue de Paris",
        zipCode: 75001,
        city: "Paris",
        country: "France",
        phoneNumber: 33547858974,
    },
];
