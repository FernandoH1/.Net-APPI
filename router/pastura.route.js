const express = require('express');
const router = express.Router();

const pastura_controller = require('../controllers/pastura.controller');

router.get('/test', pastura_controller.test);
router.get('/search/:id', pastura_controller.pastura_details);
router.get('/pastura', pastura_controller.pastura_all);
router.get('/excel', pastura_controller.pastura_All_Excel);
router.get('/find/:familia', pastura_controller.pastura_findG);
router.post('/find', pastura_controller.pastura_findE);
router.post('/create', pastura_controller.pastura_create);
router.get('/valores/:campo', pastura_controller.pastura_valores);
router.post('/update/:id', pastura_controller.pastura_findByIdAndUpdate);
router.delete('/delete/:id', pastura_controller.pastura_delete);

module.exports = router;