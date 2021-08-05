const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')


router.get('/', mainController.home);
router.get('/equipos/:id', mainController.equipo);
router.get('/equipos/detail/:id', mainController.detail);
router.get('/quienesSomos', mainController.about);

module.exports = router