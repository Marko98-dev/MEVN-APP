const express = require('express');
const router = express.Router();
const { index } = require('./user-controller');

router.get('/user', index);

module.exports = router;
