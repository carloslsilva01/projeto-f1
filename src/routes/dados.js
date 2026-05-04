var express = require("express");
var router = express.Router();

var dadosController = require('../controllers/dadosController');

router.get("/dashboard/kpi/usuarios", function (req, res) {
    dadosController.buscarUsuariosTotal(req, res);
});

module.exports = router;