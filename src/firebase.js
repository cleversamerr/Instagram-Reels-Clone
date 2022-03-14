import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDhe5mYL04DK7p5k0-_rxk3Vn4RM3H2t6Y",
  authDomain: "react-ig-reels.firebaseapp.com",
  projectId: "react-ig-reels",
  storageBucket: "react-ig-reels.appspot.com",
  messagingSenderId: "601891834055",
  appId: "1:601891834055:web:f148c57fa5ec7773b396e2",
  measurementId: "G-KL3P9YB9EP",
};

initializeApp(config);

const db = getFirestore();

export const reelsRef = collection(db, "reels");
