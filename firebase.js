// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FBID,
  authDomain: process.env.FDOMAIN,
  projectId: process.env.FBPID,
  storageBucket: process.env.FBSB,
  messagingSenderId: process.env.FBMSID,
  appId: process.env.FBAPPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
