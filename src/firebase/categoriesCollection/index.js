import { addDoc, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../initialize";

// Add user data to firestore
export const addProductToCategoryCollection = async (productId, data) => {
    return await updateDoc(doc(db, "Categories", data.category), {
        [data.productType]: arrayUnion(productId),
    });
};
