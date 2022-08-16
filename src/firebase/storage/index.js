import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import { firebaseApp } from "../initialize";
import { v4 as uuidv4 } from "uuid";

// Create a root reference
const storage = getStorage(firebaseApp);

// Upload the file and metadata

export const sendImgToStorage = async (user, data) => {
    try {
        const uuid = uuidv4();
        const imgRef = uuid + data.name;
        const storageRef = ref(
            storage,
            "images/" + user.userUid + "/" + imgRef
        );
        const metaData = await uploadBytes(storageRef, data);
        if (!metaData) {
            throw new Error("sendImgToStorage failed");
        }
        return imgRef;
    } catch (error) {
        console.log("Error: " + error);
        return error;
    }
};

// Get Image url
export const getImgUrl = async (user, imgRef) => {
    const storageRef = ref(storage, "images/" + user.userUid + "/" + imgRef);
    return await getDownloadURL(storageRef);
};

// Delete Img
export const deleteImg = async (user, imgRef) => {
    const storageRef = ref(storage, "images/" + user.userUid + "/" + imgRef);
    return await deleteObject(storageRef);
};

// Create a reference to the file to delete

// // Delete the file
// deleteObject(desertRef).then(() => {
//   // File deleted successfully
// }).catch((error) => {
//   // Uh-oh, an error occurred!
// });

export const deleteImgFromStorage = async (imgUrl) => {
    // const imgRef = await storage.refFromURL(imgUrl);
    console.log("something");

    // return await imgRef.delete();
};
