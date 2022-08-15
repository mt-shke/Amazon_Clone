import useUserData from "../../../hooks/useUserData";
import AddNewAddressItem from "./AddNewAddressItem";
import AddressItem from "./AddressItem";

const AddressesGrid = ({ user, update, fetchUserData }) => {
    if (!user?.addresses.length) {
        return (
            <section className="w-full grid grid-cols-3 grid-rows-3 gap-4 ">
                <AddNewAddressItem />
            </section>
        );
    }

    return (
        <section className="w-full grid grid-cols-3 grid-rows-3 gap-4 ">
            <AddNewAddressItem />
            {user.addresses.map((address, index) => (
                <AddressItem
                    key={address.street + index}
                    user={user}
                    address={address}
                    fetchUserData={fetchUserData}
                />
            ))}
        </section>
    );
};
export default AddressesGrid;
