// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAG1BJXv6iu_DVoPLlBnlshvp_dzGp-bvA",
  authDomain: "proyect-219db.firebaseapp.com",
  projectId: "proyect-219db",
  storageBucket: "proyect-219db.appspot.com",
  messagingSenderId: "181118750398",
  appId: "1:181118750398:web:49cbde288ca5edfc4b18ef",
  measurementId: "G-QD1RY675S5"
};
/*
const firebaseConfig = {
  apiKey: "AIzaSyC9rJCn8BEbOEgsc-yzBT23y898R0f5OOw",
  authDomain: "poifinal-56c8a.firebaseapp.com",
  databaseURL: "https://poifinal-56c8a-default-rtdb.firebaseio.com",
  projectId: "poifinal-56c8a",
  storageBucket: "poifinal-56c8a.appspot.com",
  messagingSenderId: "297515778609",
  appId: "1:297515778609:web:0c735c4716ff9d89e10b10",
  measurementId: "G-V4LHK7KBK1"
};*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();