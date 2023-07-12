// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACscKIa58SxYRlMry_f4xl6q_eVJHAp0A",
  authDomain: "authdev-87e84.firebaseapp.com",
  projectId: "authdev-87e84",
  storageBucket: "authdev-87e84.appspot.com",
  messagingSenderId: "27355729015",
  appId: "1:27355729015:web:5adb7df7bbdd182a0e0a72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
