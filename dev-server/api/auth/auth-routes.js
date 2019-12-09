const express = require('express');
const router = express.Router();
const { index } = require('./auth-controller');

router.post('/auth', index);

module.exports = router;
