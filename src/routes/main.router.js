const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main.controller');

// Definir las rutas y asociarlas con los controladores
router.get('/', mainController.index);


module.exports = router;