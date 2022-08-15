import {
    addDoc,
    arrayRemove,
    arrayUnion,
    doc,
    updateDoc,
} from "firebase/firestore";
import { db } from "../initialize";

const addressModel = {
    fullname: "",
    phoneNumber: "",
    country: "",
    street: "",
    streetBis: "",
    zipCode: "",
    city: "",
    defaultAddress: "",
};

// Address Add
export const addUserAddress = async (user, data) => {
    const newAddress = {
        fullname: data.fullname,
        phoneNumber: data.phoneNumber,
        country: data.country,
        street: data.street,
        streetBis: data.streetBis,
        zipCode: data.zipCode,
        city: data.city,
        defaultAddress: data.defaultAddress,
    };

    if (data.defaultAddress) {
        const updatedAddresses = user.addresses.map((add) =>
            add.defaultAddress === true
                ? { ...add, defaultAddress: false }
                : add
        );

        return await updateDoc(doc(db, "Users", user.userUid), {
            defaultAddress: newAddress,
            addresses: [newAddress, ...updatedAddresses],
        });
    } else {
        return await updateDoc(doc(db, "Users", user.userUid), {
            addresses: arrayUnion(newAddress),
        });
    }
};

// Delete
export const deleteUserAddress = async (user, address) => {
    if (!!address.defaultAddress) {
        const filteredAddresses = user.addresses.filter(
            (currAdd) => currAdd !== address
        );

        const updatedAddresses = filteredAddresses.map((add, index) =>
            index === 0 ? { ...add, defaultAddress: true } : add
        );

        console.log("upD", updatedAddresses);

        return await updateDoc(doc(db, "Users", user.userUid), {
            defaultAddress: updatedAddresses[0],
            addresses: updatedAddresses,
        });
    }

    return await updateDoc(doc(db, "Users", user.userUid), {
        addresses: arrayRemove(address),
    });
};

// Set Default Address
export const setDefaultAddress = async (user, address) => {
    const filteredAddresses = user.addresses.filter(
        (currAdd) => currAdd !== address
    );
    const addressesWithoutDefault = filteredAddresses.map((add) =>
        add.defaultAddress === true ? { ...add, defaultAddress: false } : add
    );
    const updatedAddresses = [
        { ...address, defaultAddress: true },
        ...addressesWithoutDefault,
    ];

    return await updateDoc(doc(db, "Users", user.userUid), {
        defaultAddress: { ...address, defaultAddress: true },
        addresses: updatedAddresses,
    });
};
