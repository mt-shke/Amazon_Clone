import {
    deleteUserAddress,
    setDefaultAddress,
} from "../../../firebase/usersCollection";

const AddressItem = ({ address, user, fetchUserData }) => {
    const defaultAddressHandler = async () => {
        try {
            await setDefaultAddress(user, address);
            await fetchUserData();
        } catch (error) {}
    };

    const deleteAddressHandler = async () => {
        try {
            await deleteUserAddress(user, address);
            await fetchUserData();
        } catch (error) {
            console.log(error);
        }
    };

    const fullname = address.fullname.split(" ");
    const firstname = fullname[0];
    const lastname = fullname.filter((elem) => elem !== firstname);
    const updatedLastname = lastname.join(" ");

    const trunc = (value) => {
        if (value.length > 30) {
            return value.substring(0, 30) + "...";
        }
        return value;
    };

    return (
        <article className="w-full aspect-square flex flex-col justify-start items-start border-2 border-secondary rounded-lg hover:bg-bg-mainlight">
            {!!address.defaultAddress && (
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
                        <span className="uppercase">{firstname ?? ""}</span>

                        <span>
                            {` `}
                            {trunc(updatedLastname) ?? ""}
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
                {address.defaultAddress ? (
                    <div className="text-blue text-sm">
                        <span className="hover:cursor-pointer">{`Modifier`}</span>
                        {` | `}
                        <span
                            onClick={deleteAddressHandler}
                            className="hover:cursor-pointer"
                        >{`Effacer`}</span>
                    </div>
                ) : (
                    <div className="text-blue text-sm">
                        <span
                            onClick={deleteAddressHandler}
                            className="hover:cursor-pointer"
                        >{`Effacer`}</span>
                        {` | `}
                        <span
                            onClick={defaultAddressHandler}
                            className="hover:cursor-pointer"
                        >{`Définir par défaut`}</span>
                    </div>
                )}
            </div>
        </article>
    );
};

export default AddressItem;
