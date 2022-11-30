// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FBID,
  authDomain: "codexsourav-404.firebaseapp.com",
  projectId: "codexsourav-404",
  storageBucket: "codexsourav-404.appspot.com",
  messagingSenderId: "941623218077",
  appId: "1:941623218077:web:0cd9b35f0a02491b6a6974",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
