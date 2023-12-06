// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnxGhW7Tktp8cg_L5iFO2F7HV18K_ZaVA",
  authDomain: "clone-a0732.firebaseapp.com",
  projectId: "clone-a0732",
  storageBucket: "clone-a0732.appspot.com",
  messagingSenderId: "735980945600",
  appId: "1:735980945600:web:41b80a9d6f75a72b76ad25"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)
