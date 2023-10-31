// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWSU87sHM4p4NsJLGdfhP_VykitrYn-1c",
    authDomain: "volunteer-network-10a69.firebaseapp.com",
    projectId: "volunteer-network-10a69",
    storageBucket: "volunteer-network-10a69.appspot.com",
    messagingSenderId: "330678617623",
    appId: "1:330678617623:web:243cb5ce90e85841a0be52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;