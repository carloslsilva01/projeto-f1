var express = require("express");
var router = express.Router();

var quizController = require('../controllers/quizController');

router.post("/registrar", function (req, res) {
    quizController.enviarTentativa(req, res);
});

router.get("/ranking-top-5", function (req, res) {
    quizController.rankingTop5(req, res);
})

module.exports = router;