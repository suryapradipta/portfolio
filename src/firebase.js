import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "portfolio-df771.firebaseapp.com",
    projectId: "portfolio-df771",
    storageBucket: "portfolio-df771.appspot.com",
    messagingSenderId: "412210543277",
    appId: "1:412210543277:web:2db975608bb3ec3bfce424",
    measurementId: "G-9LS5HYTVQD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
