const express = require('express');
const router = express.Router();
const { index } = require('./register.controller');

router.post('/register', index);

module.exports = router;
