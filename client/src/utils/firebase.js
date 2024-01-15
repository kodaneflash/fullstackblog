import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fullstackblog-d3f82.firebaseapp.com",
  projectId: "fullstackblog-d3f82",
  storageBucket: "fullstackblog-d3f82.appspot.com",
  messagingSenderId: "1056779432035",
  appId: "1:1056779432035:web:4857438c79bd23d105c856",
};

export const app = initializeApp(firebaseConfig);
