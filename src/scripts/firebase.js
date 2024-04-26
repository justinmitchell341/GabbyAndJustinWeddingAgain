import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';


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
const db = getFirestore();
const auth = getAuth();
const rtdb = getDatabase();

// Connect to Firebase emulators if running locally
if (window.location.hostname === 'localhost') {
  // Connect to the Firestore emulator
  connectFirestoreEmulator(db, 'localhost', 8080);

  // Connect to the Authentication emulator
  connectAuthEmulator(auth, 'http://localhost:9099');

  // Connect to the Realtime Database emulator
  connectDatabaseEmulator(rtdb, 'localhost', 9000);
}
export { db };