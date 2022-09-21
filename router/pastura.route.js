const express = require('express');
const router = express.Router();
// Require al controlador ¿?¿?
const pastura_controller = require('../controllers/pastura.controller');
// Prueba
router.get('/test', pastura_controller.test);
router.get('/search/:id', pastura_controller.pastura_details);
router.get('', pastura_controller.pastura_all);
router.get('/find/:familia', pastura_controller.pastura_findG);
router.post('/find', pastura_controller.pastura_findE);
router.post('/create', pastura_controller.pastura_create);
router.get('/valores/:campo', pastura_controller.pastura_valores);
//router.post('/update/:id', pastura_controller.pastura_findByIdAndUpdate);
module.exports = router;