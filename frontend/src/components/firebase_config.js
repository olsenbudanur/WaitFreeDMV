import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "1",
    authDomain: "2.firebaseapp.com",
    projectId: "3",
    storageBucket: "4.appspot.com",
    messagingSenderId: "5",
    appId: "1::6:7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore();
