var database = require("../database/config")

function buscarUsuariosTotal() {
    console.log('Buscando Quantidade Usuarios Totais no Sistema');

    var instrucaoSql = `SELECT COUNT(id_usuario) AS total FROM usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEquipePopular() {
    console.log('Buscando Equipe Mais Popular do Sistema');

    var instrucaoSql = 
    `SELECT e.nome, COUNT(u.fk_equipe) AS quantidade_fas
    FROM usuario u
    JOIN equipe e ON e.id_equipe = u.fk_equipe 
    GROUP BY e.nome 
    ORDER BY quantidade_fas DESC LIMIT 1;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUsuariosTotal,
    buscarEquipePopular
};