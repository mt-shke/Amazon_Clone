import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./initialize";

const usersCollectionRef = collection(db, "users");

// Add a new document in collection "cities"

// export const setUserToFirestore = async (userUid, data) => {
//     await setDoc(doc(db, "Users", userUid), {
//         firstname: data.name,
//         lastname: "",
//         email: data.email,
//     });
// };
