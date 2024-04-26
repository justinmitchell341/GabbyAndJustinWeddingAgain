// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbZWdtF2CPA77kQRi6xJ52jDn81fF28PI",
  authDomain: "wedding-website-e943f.firebaseapp.com",
  projectId: "wedding-website-e943f",
  storageBucket: "wedding-website-e943f.appspot.com",
  messagingSenderId: "914847142104",
  appId: "1:914847142104:web:1b2d8f0d45be398b8087ad",
  measurementId: "G-47CR3MZ1KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = firebase.firestore();
