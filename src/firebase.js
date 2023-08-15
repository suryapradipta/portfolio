import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "portfolio-ee383.firebaseapp.com",
    projectId: "portfolio-ee383",
    storageBucket: "portfolio-ee383.appspot.com",
    messagingSenderId: "994485650217",
    appId: "1:994485650217:web:79a9ecd29d31523235ad38",
    measurementId: "G-Z3BCWJY9LH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
