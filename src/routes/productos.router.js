const express = require('express');

const prodoctosController = require('../controllers/productos.controller');

const router = express.Router();

router.get('/', prodoctosController.index);

router.get('/:id', prodoctosController.show);


module.exports = router;