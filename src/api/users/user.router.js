const controller = require('./user.controller.js');
const router = require('express').Router();

router.get('/', controller.getUsers);
router.post('/', controller.createUser);

module.exports = router;
