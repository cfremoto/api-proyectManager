const router = require('express').Router();
const controller = require('./proyecto.controller.js');

router.get('/', controller.getProyectos);
router.post('/', controller.createProyecto);

module.exports = router;
