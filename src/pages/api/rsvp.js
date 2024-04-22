// src/pages/api/rsvp.js

// Import the necessary utilities from your database setup and ORM
import { db } from 'astro:db';
import { RsvpTable } from '../../../db/config';  // Adjust this path to accurately point to your config.ts file

export async function POST({ request }) {
    try {
        // First, read the raw body to ensure it is being received correctly
        const rawBody = await request.text();
        console.log("Raw request body:", rawBody);

        // Parse the JSON from the raw body
        let body;
        try {
            body = JSON.parse(rawBody);
        } catch (parseError) {
            console.error("Failed to parse JSON:", parseError);
            return new Response(JSON.stringify({ message: 'Invalid JSON format.' }), { status: 400 });
        }

        console.log("Parsed data:", body);

        // Destructure and validate the necessary fields
        const { name, guests, email, phoneNumber, response } = body;
        if (!name || !email || !phoneNumber || !response) {
            console.log("Validation failed", { name, guests, email, phoneNumber, response });
            return new Response(JSON.stringify({ message: 'All fields are required and must be correctly formatted.' }), { status: 400 });
        }

        // Insert the new RSVP into the database
        const result = await db.insert(RsvpTable).values({
            name: name, 
            guests: guests, 
            email: email, 
            phoneNumber: phoneNumber, 
            response: response
        });
        console.log("Insert result:", result);

        // If the insertion is successful, send a success response
        return new Response(JSON.stringify({ message: 'RSVP submitted successfully!', result }), { status: 200 });
    } catch (error) {
        console.error("Error in RSVP submission:", error);
        // Provide a detailed error message in the response
        return new Response(JSON.stringify({ message: 'Something went wrong.', error: error.message }), { status: 500 });
    }
}
