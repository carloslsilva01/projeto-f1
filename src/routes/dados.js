var express = require("express");
var router = express.Router();

var dadosController = require('../controllers/dadosController');

// KPI's

router.get("/dashboard/kpi/usuarios", function (req, res) {
    dadosController.buscarUsuariosTotal(req, res);
});

router.get("/dashboard/kpi/equipe", function (req, res) {
    dadosController.buscarEquipePopular(req, res);
})

router.get("/dashboard/kpi/piloto", function (req, res) {
    dadosController.buscarPilotoPopular(req, res);
})

router.get("/dashboard/kpi/quiz", function (req, res) {
    dadosController.buscarPorcentagemAcertoQuiz(req, res);
})

// Gráficos 

router.get("/dashboard/grafico/equipe", function (req, res) {
    dadosController.buscarTop5equipesFavoritas(req, res);
})

router.get("/dashboard/grafico/piloto", function (req, res) {
    dadosController.buscarTop5pilotosFavoritos(req, res);
})

router.get("/dashboard/grafico/acompanhamento", function (req, res) {
    dadosController.buscarTempoDeAcompanhamento(req, res);
})

router.get("/dashboard/grafico/equipe-tempo/:idAcompanhamento", function (req, res) {
    dadosController.buscarEquipeTempo(req, res);
})

module.exports = router;