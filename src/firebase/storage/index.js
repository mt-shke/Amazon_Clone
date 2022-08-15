import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseApp } from "../initialize";

// Create a root reference
const storage = getStorage(firebaseApp);

// Upload the file and metadata

export const sendImgToStorage = async (user, data) => {
    try {
        const storageRef = ref(
            storage,
            "images/" + user.userUid + "/" + data.name
        );
        const metaData = await uploadBytes(storageRef, data);
        if (!metaData) {
            throw new Error("sendImgToStorage failed");
        }
        return await getDownloadURL(storageRef);
    } catch (error) {
        console.log("Error: " + error);
        return error;
    }
};

// export const sendLocalImgToStorage = async (user, data) => {
//     try {
//       const ref = storage().ref(`/assets/users/${user.userUid}/` + data.fileName);
//       const response = await ref.putFile(data.uri);
//       if (!response) {
//         throw new Error('Could not upload image to Storage');
//       }
//       return ref;
//     } catch (error) {
//       console.log('Error: ' + error);
//       return error;
//     }
//   };

// Create a reference to the file to delete

// // Delete the file
// deleteObject(desertRef).then(() => {
//   // File deleted successfully
// }).catch((error) => {
//   // Uh-oh, an error occurred!
// });
