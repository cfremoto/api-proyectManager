const controller = require('./auth.controller.js');
const router = require('express').Router();

router.post('/', controller.login);

module.exports = router;
