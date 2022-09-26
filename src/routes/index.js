const router = require('express').Router();
const user = require('../api/users/user.router.js');
const auth = require('../api/auth/auth.router.js');

router.use('/user', user);
router.use('/login', auth);

module.exports = router;
