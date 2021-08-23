const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')
const hasAccess = require('../middlewares/adminAccess');

router.get('/login', adminController.login);
router.post('/login', adminController.access);
router.get('/logout', adminController.logout);
router.get('/dashboard', hasAccess, adminController.dashboard);
router.get('/clientes', hasAccess, adminController.clientes);
router.get('/create-cliente', hasAccess, adminController.crearCliente);
router.post('/create-cliente', hasAccess, adminController.guardarCliente);
router.get('/editar-cliente/:id', hasAccess, adminController.editarCliente);
router.put('/editar-cliente/:id', hasAccess, adminController.actualizarCliente);
router.get('/eliminar-cliente/:id', hasAccess, adminController.eliminarCliente);
router.get('/equipo/:id', hasAccess, adminController.detail);
router.get('/equipos', hasAccess, adminController.equipos);
router.get('/create-equipo', hasAccess, adminController.crearEquipo);
router.post('/create-equipo', hasAccess, adminController.guardarEquipo);
router.get('/editar-equipo/:id', hasAccess, adminController.editarEquipo);
router.post('/editar-equipo/:id', hasAccess, adminController.actualizarEquipo);
router.get('/eliminar-equipo/:id', hasAccess, adminController.eliminarEquipo);

module.exports = router
