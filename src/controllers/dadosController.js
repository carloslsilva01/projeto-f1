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

module.exports = {
    buscarUsuariosTotal
};