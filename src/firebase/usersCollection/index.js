export * from "./address";

import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../initialize";

// Add user data to firestore
export const createNewUserFirestoreData = async (newUserUid, data) => {
    return await setDoc(doc(db, "Users", newUserUid), {
        firstname: data.name,
        lastname: "",
        email: data.email,
        profilPicture: "",
        defaultAddress: {
            fullname: "",
            phoneNumber: "",
            country: "",
            street: "",
            streetBis: "",
            zipCode: "",
            city: "",
            defaultAddress: "",
        },
        addresses: [],
    });
};

// Get user data from firestore
export const getUserFirestoreData = async (userUid) => {
    try {
        const docRef = doc(db, "Users", userUid);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
            throw new Error("User data Doc, does not exist");
        }
        return docSnap.data();
    } catch (error) {
        console.error("getUserData, error is: ", error);

        return error;
    }
};

export const deleteUserData = async (userUid) => {
    await deleteDoc(doc(db, "Users", userUid));
};

// export const setUserToFirestore = async (userUid: string, email: string) => {
//   try {
//     const newUserInFirestore = await firestore()
//       .collection('Users')
//       .doc(userUid)
//       .set({
//         email: email,
//         firstname: '',
//         lastname: '',
//         profilPicture: '',
//         uid: userUid,
//         address: {street: '', zipCode: '', state: ''},
//       });

//     return newUserInFirestore;
//   } catch (error) {
//     console.log('in Error firestore');
//     return null;
//   }
// };

// export const updateUserFirestore = async (uid: string, data: any) => {
//   try {
//     await firestore().collection('Users').doc(uid).update(data);
//     return {success: true};
//   } catch (error: any) {
//     console.error('In updateUserFn, Error while updating user:', error);
//     return {success: false};
//   }
// };

// export const getUserData = async (userUid: string) => {
//   try {
//     return await firestore().collection('Users').doc(userUid).get();
//   } catch (error: any) {
//     if (error.code === 'firestore/permission-denied') {
//       console.log('While getting user data: permission denied');
//       return;
//     }
//     console.log('getUserData error:' + error);
//   }
//   return;
// };

// export const querySnapshot = async (uid: string) => {
//   try {
//     const doc = await firestore().collection('Users').doc(uid).get();
//     if (doc.exists) {
//     }
//     // return firestore()
//     //   .collection('Users')
//     //   .doc(uid)
//     //   .get()
//     //   .then(documentSnapshot => {
//     //     if (documentSnapshot.exists) {
//     //       return documentSnapshot.data();
//     //     }
//     //   });
//   } catch (error) {}
// };

// export const getAllUsers = async () => {
//   return await firestore().collection('Users');
// };

// export const getSpecificDoc = async () => {};
