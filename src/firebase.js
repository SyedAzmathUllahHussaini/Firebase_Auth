import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCajKG-hrWBMHVe3emUftnav7iS1F98N_g",
    authDomain: "react-authentication-cc65e.firebaseapp.com",
    projectId: "react-authentication-cc65e",
    storageBucket: "react-authentication-cc65e.appspot.com",
    messagingSenderId: "450033083096",
    appId: "1:450033083096:web:4955b206284d31d2eb2dad",
    measurementId: "G-SHXJG77TLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app