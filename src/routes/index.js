const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Dev Solutions' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

router.get('/success', (req, res) => {
    res.render('success', { title: 'Success' });
});

router.post('/send-email', async(req, res) => {
    const { name, email, phone, message } = req.body;

    contentHTML = `
        <h1>User information</h1>
        <ul>
            <li>User name: ${name}</li>       
            <li>User email: ${email}</li>
            <li>User phone: ${phone}</li> 
        </ul>
    `;

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'russell.flatley@ethereal.email',
            pass: 'e5yb7gECM2YcHgNzFe'
        },
        tls: {
            rejectUnauthorized: false
        }

    });

    const info = await transporter.sendMail({
        from: "'Dev Solutions' <russell.flatley@ethereal.email>",
        to: 'juanpablosaladino@gmail.com',
        subject: 'Website contact form',
        html: contentHTML
    });

    console.log('Message sent', info.messageId);

    res.redirect('/success');
});

module.exports = router;