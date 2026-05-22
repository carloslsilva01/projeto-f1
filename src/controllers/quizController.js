var quizModel = require("../models/quizModel");

function enviarTentativa(req, res) {

    var id_usuario = req.body.idUsuarioServer;
    var pontuacao = req.body.pontuacaoServer;
    var certas = req.body.certasServer;

    if(id_usuario == undefined) {
        res.status(400).send("Id usuário está undefined!");
    } else if(pontuacao == undefined) {
        res.status(400).send("A pontuação está undefined!");
    } else if(certas == undefined) {
        res.status(400).send("A quantidade acertos está undefined!");
    } else {
        quizModel.enviarTentativa(id_usuario, pontuacao, certas)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
}

module.exports = {
    enviarTentativa
}