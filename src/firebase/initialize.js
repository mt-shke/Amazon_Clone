// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCasMKxk2zuClZW-qrPqh_UIJcpn-gFf6k",
    authDomain: "clone-f440b.firebaseapp.com",
    projectId: "clone-f440b",
    storageBucket: "clone-f440b.appspot.com",
    messagingSenderId: "193688012203",
    appId: "1:193688012203:web:1eb8fd8823012caad3feee",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
