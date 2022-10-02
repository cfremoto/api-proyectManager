const router = require('express').Router();
const controller = require('./tareas.controller.js');
const auth = require('../../middleware/auth.js');

router.get('/', auth.checkToken, controller.getTareas);
router.post('/', auth.checkToken, controller.createTarea);
router.patch('/:id', auth.checkToken, controller.updateTarea);
router.delete('/:id', auth.checkToken, controller.deleteTarea);

module.exports = router;
