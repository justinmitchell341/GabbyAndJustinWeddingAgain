import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

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
const db = getFirestore(app);
const auth = getAuth(app);
const rtdb = getDatabase(app);

export { db, auth, rtdb };
