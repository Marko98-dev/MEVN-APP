const express = require('express');
const router = express.Router();
const { create, update, remove, show, index } = require('./tasks-controller');

router.post('/task', create);
router.get('/task', index);
router.get('/task/:id', show);
router.put('/task', update);
router.delete('/task', remove);

module.exports = router;
