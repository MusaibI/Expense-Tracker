// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhK2RIBNiNPXQWGRLyyZZhjUvz0eFYiCo",
  authDomain: "expense-tracker-78f6e.firebaseapp.com",
  projectId: "expense-tracker-78f6e",
  storageBucket: "expense-tracker-78f6e.appspot.com",
  messagingSenderId: "79700520764",
  appId: "1:79700520764:web:926bfc924b96b9af563839"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
