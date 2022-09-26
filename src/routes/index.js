const router = require('express').Router();
const user = require('../api/users/user.router.js');
const auth = require('../api/auth/auth.router.js');
const proyectos = require('../api/proyects/proyecto.router.js');

router.use('/user', user);
router.use('/login', auth);
router.use('/proyectos', proyectos);

module.exports = router;
