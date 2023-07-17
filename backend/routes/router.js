const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

//SEND EMAIL FOR REALTOR SERVICES
router.post('/sendEmailToRealtor', (req, res) => {
  const { name, email, phoneNumber, message } = req.body;
  console.log(req.body)

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 587, 
    secure: false, 
    auth: {
      user: 'jkinyanjui734@gmail.com', 
      pass: 'mutzxazheukkliwd', 
    },
  });

  // Prepare the email
  const mailOptions = {
    from: email,
    to: 'jkinyanjui734@gmail.com', 
    subject: 'Enquiry on REALTOR Services',
    text: `
      Name: ${name}
      Email: ${email}
      PhoneNumber: ${phoneNumber}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.status(500).json({ error: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully.' });
    }
  });
});


//SEND EMAIL FOR IMMIGRATION SERVICES SERVICES
router.post('/sendEmailToImmigration', (req, res) => {
    const { name, email, phoneNumber,visaType, message } = req.body;
    console.log(req.body)
  
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', 
      port: 587, 
      secure: false, 
      auth: {
        user: 'jkinyanjui734@gmail.com', 
        pass: 'mutzxazheukkliwd', 
      },
    });
  
    // Prepare the email
    const mailOptions = {
      from: email,
      to: 'jkinyanjui734@gmail.com', 
      subject: 'Enquiry on IMMIGRATION Services',
      text: `
        Name: ${name}
        Email: ${email}
        PhoneNumber: ${phoneNumber}
        VisaType Enquiry: ${visaType}
        Message: ${message}
      `,
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error:', error);
        res.status(500).json({ error: 'An error occurred while sending the email.' });
      } else {
        console.log('Email sent:', info.response);
        res.json({ message: 'Email sent successfully.' });
      }
    });
  });



module.exports = router;
