// src/scripts/handleRSVP.js
import { db } from './firebase.js'; // Import the Firestore database
import { collection, addDoc } from "firebase/firestore"; // Firestore functions for collections and documents

export default async function handleRsvpFormSubmission(event) {
    const form = event.target;
    event.preventDefault(); // Prevent the default form submit behavior
    const formData = new FormData(form);
    const data = Object.fromEntries(formData); // Convert form data to an object
    try {
      // Add the RSVP data to the "rsvps" collection in Firestore
      const docRef = await addDoc(collection(db, "rsvps"), data);
      const successMessage = document.createElement('div');
      successMessage.innerText = 'Thank you, your RSVP has been submitted successfully!';
      form.appendChild(successMessage);
       setTimeout(() => {
       successMessage.remove();
      }, 5000);
      console.log("RSVP submitted successfully, document ID: ", docRef.id);
      form.reset();
    } catch (e) {
      console.error("Error submitting RSVP: ", e);
    }
}
