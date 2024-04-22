import { RsvpTable } from '../db/config';
import { db } from 'astro-db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Parse the request body
      const { name, numberOfGuests, email, phoneNumber, attendance } = JSON.parse(req.body);

      // Validate the input
      if (!name || !numberOfGuests || !email || !phoneNumber || !attendance) {
        return res.status(400).json({ message: 'All fields are required.' });
      }

      // Insert the new RSVP into the database
      const result = await db.insert(RsvpTable).values({
        name,
        numberOfGuests,
        email,
        phoneNumber,
        attendance,
      });

      // If insertion was successful, send a success response
      res.status(200).json({ message: 'RSVP submitted successfully!', result });
    } catch (error) {
      // If there's an error, send an error response
      res.status(500).json({ message: 'Something went wrong.', error });
    }
  } else {
    // If the request method is not POST, send a 405 Method Not Allowed status
    res.status(405).json({ message: 'Method not allowed' });
  }
}
