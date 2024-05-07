const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle form submissions
app.post("/submit-form", async (req, res) => {
  const { firstName, lastName, email, phoneNumber, inquiry } = req.body;

  // Example nodemailer setup (replace with your email service provider)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mitroviczakary@gmail.com",
      pass: "Battlefield3!",
    },
  });

  const mailOptions = {
    from: email,
    to: "mitroviczakary@gmail.com",
    subject: "New Contact Form Submission",
    html: `
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Inquiry: ${inquiry}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Form submitted successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("An error occurred while sending the email.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
