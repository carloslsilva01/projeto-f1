var database = require("../database/config")

function buscarUsuariosTotal() {
    console.log('Buscando Quantidade Usuarios totais no sistema');

    var instrucaoSql = `SELECT COUNT(id_usuario) AS total FROM usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUsuariosTotal
};