var express = require("express");
var router = express.Router();

var dadosController = require('../controllers/dadosController');

router.get("/dashboard/kpi/usuarios", function (req, res) {
    dadosController.buscarUsuariosTotal(req, res);
});

router.get("/dashboard/kpi/equipe", function (req, res) {
    dadosController.buscarEquipePopular(req, res);
})

module.exports = router;