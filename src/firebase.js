import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCDBLxoMd3-Tr-6h_1DSHLDjr5Ti7X09GM",
  authDomain: "samer-ig-reels.firebaseapp.com",
  projectId: "samer-ig-reels",
  storageBucket: "samer-ig-reels.appspot.com",
  messagingSenderId: "145670618598",
  appId: "1:145670618598:web:101653be47f200dc99ea27",
  measurementId: "G-9Q213S1NNG",
};

initializeApp(config);

const db = getFirestore();

export const reelsRef = collection(db, "reels");
