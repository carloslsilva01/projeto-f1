var database = require("../database/config")

function enviarTentativa(id_usuario, pontuacao) {
    console.log(`Acessando o model e enviando tentativa do usuário ${id_usuario}`);

    var instrucaoSql = `INSERT INTO ranking_quiz VALUES (DEFAULT, ${id_usuario}, DEFAULT, ${pontuacao});`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    enviarTentativa
};