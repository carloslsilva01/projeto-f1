var express = require("express");
var router = express.Router();

var quizController = require('../controllers/quizController');

router.post("/registrar", function (req, res) {
    quizController.enviarTentativa(req, res);
});

module.exports = router;