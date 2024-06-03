const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configure your email and password
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

// Create a nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Listen for new RSVP submissions
exports.sendEmailConfirmation = functions.firestore
    .document("rsvps/{rsvpId}")
    .onCreate((snap, context) => {
      const newValue = snap.data();

      const mailOptions = {
        from: gmailEmail,
        to: newValue.email, // The email field from the RSVP submission
        subject: "RSVP Confirmation",
        text: `Hi ${newValue.name}, thank you for RSVPing! We have received 
        your submission and look forward to seeing you.`,
      };
      // Attempt to send the email
      return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("There was an error while sending the email:", error);
          return null;
        }
        return console.log("Email sent:", info.response);
      });
    });
// NEED TO RUN THIS COMMAND firebase functions:config:set gmail.email="justinandgabbywedding@gmail.com" gmail.password="wedding0907"
//and then THIS COMMAND firebase deploy --only functions
//AFTER GOOGLE LETS YOU PAY FOR THERE BLAZE PAY AS YOU GO PLAN