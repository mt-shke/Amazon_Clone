import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    setDoc,
    updateDoc,
} from "firebase/firestore";
import { db } from "../initialize";

// Add user data to firestore
export const addNewProduct = async (user, data) => {
    return await addDoc(collection(db, "Products"), data);
};

// // Get user data from firestore
// export const getUserFirestoreData = async (userUid) => {
//     try {
//         const docRef = doc(db, "Users", userUid);
//         const docSnap = await getDoc(docRef);
//         if (!docSnap.exists()) {
//             throw new Error("User data Doc, does not exist");
//         }
//         return docSnap.data();
//     } catch (error) {
//         console.error("getUserData error is: ", error);
//         return error;
//     }
// };

// // Update user data
// export const updateUserFirestoreData = async (user, data) => {
//     await updateDoc(doc(db, "Users", userUid), {
//         firstname: data.firstname,
//         lastname: data.lastname,
//         email: data.email,
//         profilPicture: data.profilPicture,
//     });
// };

// // Delete user data
// export const deleteUserData = async (userUid) => {
//     await deleteDoc(doc(db, "Users", userUid));
// };
