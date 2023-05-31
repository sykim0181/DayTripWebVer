import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmb2OX3hvX8R0Ls26yHO6nF333b4bRMkY",
  authDomain: "mysns-22f68.firebaseapp.com",
  projectId: "mysns-22f68",
  storageBucket: "mysns-22f68.appspot.com",
  messagingSenderId: "815838074575",
  appId: "1:815838074575:web:5aa769a24bbea9c559c9ba",
  measurementId: "G-JVB6JTD6VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service

export default app;
