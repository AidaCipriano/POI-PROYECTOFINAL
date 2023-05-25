// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAJ-OvjRqRebxB-cVPC2VB6nCg67gtCQ1A",
  authDomain: "poi-project-f5352.firebaseapp.com",
  databaseURL: "https://poi-project-f5352-default-rtdb.firebaseio.com",
  projectId: "poi-project-f5352",
  storageBucket: "poi-project-f5352.appspot.com",
  messagingSenderId: "580799136155",
  appId: "1:580799136155:web:6a8af2ddc6f97fa1b2213e",
  measurementId: "G-PSJHE7LGH1"
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