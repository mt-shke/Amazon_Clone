import AddNewAddressItem from "./AddNewAddressItem";
import AddressItem from "./AddressItem";

const AddressesGrid = ({ user, update }) => {
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
            {!!user.defaultAddress && (
                <AddressItem
                    key={user.defaultAddress.street + "defaultAddress"}
                    user={user}
                    address={user.defaultAddress}
                />
            )}
            {user.addresses
                .filter((address, index) => !address.defaultAddress)
                .map((address, index) => (
                    <AddressItem
                        key={address.street + index}
                        user={user}
                        address={address}
                        update={update}
                    />
                ))}
        </section>
    );
};
export default AddressesGrid;
