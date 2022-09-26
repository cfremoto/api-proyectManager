const router = require('express').Router();
const controller = require('./proyecto.controller.js');
const auth = require('../../middleware/auth.js');

router.get('/', auth.checkToken, controller.getProyectos);
router.post('/', auth.checkToken, controller.createProyecto);
router.patch('/', auth.checkToken, controller.updateProyecto);

module.exports = router;
