// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYPyK8UhuibISbkjl9QH4e4Y7-bv_izAg",
  authDomain: "ruso-bier.firebaseapp.com",
  projectId: "ruso-bier",
  storageBucket: "ruso-bier.appspot.com",
  messagingSenderId: "1029534782569",
  appId: "1:1029534782569:web:be006a42ab70d09b2bfef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);