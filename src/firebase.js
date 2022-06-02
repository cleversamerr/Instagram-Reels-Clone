import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const config = {
  apiKey: process.env["REACT_APP_PRIVATE_KEY"],
  authDomain: "samer-ig-reels.firebaseapp.com",
  projectId: "samer-ig-reels",
  storageBucket: "samer-ig-reels.appspot.com",
  messagingSenderId: "145670618598",
  appId: "1:145670618598:web:62f604cd82124a8d99ea27",
  measurementId: "G-G8P942JS38",
};

initializeApp(config);

const db = getFirestore();

export const reelsRef = collection(db, "reels");
