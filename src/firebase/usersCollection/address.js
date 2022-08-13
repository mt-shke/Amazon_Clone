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
export const addUserAddress = async (userUid, data) => {
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
        return await updateDoc(doc(db, "Users", userUid), {
            defaultAddress: newAddress,
            addresses: arrayUnion(newAddress),
        });
    } else {
        return await updateDoc(doc(db, "Users", userUid), {
            addresses: arrayUnion(newAddress),
        });
    }
};

// Delete
export const deleteUserAddress = async (user, address) => {
    if (!!address.defaultAddress) {
        return await updateDoc(doc(db, "Users", user.userUid), {
            defaultAddress: null,
            addresses: arrayRemove(address),
        });
    }

    return await updateDoc(doc(db, "Users", user.userUid), {
        addresses: arrayRemove(address),
    });
};

// Set Default Address
export const setDefaultAddress = async (user, address) => {
    let updatedAddresses = user.addresses.map((add) =>
        add.defaultAddress === true
            ? { ...add, defaultAddress: false }
            : add === address
            ? { ...add, defaultAddress: true }
            : add
    );

    return await updateDoc(doc(db, "Users", user.userUid), {
        defaultAddress: { ...address, defaultAddress: true },
        addresses: updatedAddresses,
    });
};
