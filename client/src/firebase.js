// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-5f5ba.firebaseapp.com",
    projectId: "mern-estate-5f5ba",
    storageBucket: "mern-estate-5f5ba.appspot.com",
    messagingSenderId: "86286784119",
    appId: "1:86286784119:web:43379d9cc122a1d0d29872"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);