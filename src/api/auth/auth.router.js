const controller = require('./auth.controller.js');
const router = require('express').Router();
const auth = require('../../middleware/auth.js');

router.post('/', controller.login);
router.get('/', auth.checkToken, controller.getUser);

module.exports = router;
