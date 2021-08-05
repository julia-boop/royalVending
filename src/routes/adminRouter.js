const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')


router.get('/login', adminController.login);
router.get('/dashboard', adminController.dashboard);
router.get('/clientes', adminController.clientes);
router.get('/equipos', adminController.equipos);


module.exports = router