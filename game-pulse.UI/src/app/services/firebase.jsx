import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, OAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVZGfdckkDUDdsT4iMi8VQbJ0Zh8-E3BI",
  authDomain: "gamepulse-a9dd2.firebaseapp.com", // TODO: Update this to your actual domain in production
  projectId: "gamepulse-a9dd2",
  storageBucket: "gamepulse-a9dd2.firebasestorage.app",
  messagingSenderId: "43841193037",
  appId: "1:43841193037:web:5b835689e8d084215c8804",
  measurementId: "G-N370TDHEBB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider("apple.com");

export const firebaseAuth = getAuth(app);
export { googleProvider, appleProvider };
