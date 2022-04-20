const express = require('express');
const router = express.Router();
const Post = require('../models/User')

router.get('/users', (req, res) => {
    res.send('We are on users');
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;

