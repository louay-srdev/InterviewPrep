import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOrPLp_La-amnFyGr-JvilYVF6aX6G9H4",
  authDomain: "interview-app-33772.firebaseapp.com",
  projectId: "interview-app-33772",
  storageBucket: "interview-app-33772.firebasestorage.app",
  messagingSenderId: "1011845995746",
  appId: "1:1011845995746:web:33b4c3d0202c9b202b52bb",
  measurementId: "G-95VE3VCFH1",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
