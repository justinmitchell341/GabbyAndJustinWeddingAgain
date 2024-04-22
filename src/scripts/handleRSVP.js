// src/scripts/handleRsvp.js
export default async function handleRsvpFormSubmission(event) {
    const form = event.target;
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
  
    const response = await fetch('/api/rsvp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    if (response.ok) {
      console.log('RSVP submitted successfully');
    } else {
      console.error('Failed to submit RSVP');
    }
  }
  