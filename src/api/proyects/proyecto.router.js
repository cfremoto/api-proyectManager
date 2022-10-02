const router = require('express').Router();
const controller = require('./proyecto.controller.js');
const auth = require('../../middleware/auth.js');

router.get('/', auth.checkToken, controller.getProyectos);
router.post('/', auth.checkToken, controller.createProyecto);
router.patch('/:id', auth.checkToken, controller.updateProyecto);
router.delete('/:id', auth.checkToken, controller.deleteProyecto);

module.exports = router;
