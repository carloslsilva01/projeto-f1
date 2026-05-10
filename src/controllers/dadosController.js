var dadosModel = require("../models/dadosModel");

function buscarUsuariosTotal(req, res) {
    dadosModel.buscarUsuariosTotal()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log('Houve um erro ao tentar buscar os usuarios!');
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarEquipePopular(req, res) {
    dadosModel.buscarEquipePopular()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log('Houve um erro ao tentar buscar a equipe mais popular!');
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarPilotoPopular(req, res) {
    dadosModel.buscarPilotoPopular()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log('Houve um erro ao tentar buscar o piloto mais popular!');
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarPorcentagemAcertoQuiz(req, res) {
    dadosModel.buscarPorcentagemAcertoQuiz()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log('Houve um erro ao tentar buscar porcentagem de acerto no quiz!');
            res.status(500).json(erro.sqlMessage);
        })
}

function buscarTop5equipesFavoritas(req, res) {
    dadosModel.buscarTop5equipesFavoritas()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log('Houve um erro ao tentar buscar as top 5 equipes favoritas!');
            res.status(500).json(erro.sqlMessage);
        })
}

function buscarTop5pilotosFavoritos(req, res) {
    dadosModel.buscarTop5pilotosFavoritos()
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log('Houve um erro ao tentar buscar os top 5 pilotos favoritos!');
            res.status(500).json(erro.sqlMessage);
        })
}

module.exports = {
    buscarUsuariosTotal,
    buscarEquipePopular,
    buscarPilotoPopular,
    buscarPorcentagemAcertoQuiz,
    buscarTop5equipesFavoritas,
    buscarTop5pilotosFavoritos
};