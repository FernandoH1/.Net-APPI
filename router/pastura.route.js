const express = require('express');
const router = express.Router();
// Require al controlador ¿?¿?
const pastura_controller = require('../controllers/pastura.controller');
// Prueba
router.get('/test', pastura_controller.test);
//router.get('/last', pastura_controller.pastura_findLast);
router.get('/:id', pastura_controller.pastura_details);
router.get('', pastura_controller.pastura_all);
router.post('/create', pastura_controller.pastura_create);
router.post('/update/:id', pastura_controller.pastura_findByIdAndUpdate);
module.exports = router;