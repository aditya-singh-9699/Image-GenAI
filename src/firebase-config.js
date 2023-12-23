// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCniYYvJLR2VbLITQTuDcbyWQax6X9NgY0",
  authDomain: "image-generation-142d3.firebaseapp.com",
  projectId: "image-generation-142d3",
  storageBucket: "image-generation-142d3.appspot.com",
  messagingSenderId: "67459934141",
  appId: "1:67459934141:web:3b349ced6e8dc3433814d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage }