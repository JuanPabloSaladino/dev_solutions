const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Dev Solutions' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

module.exports = router;