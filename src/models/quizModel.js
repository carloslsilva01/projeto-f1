var database = require("../database/config")

function enviarTentativa(id_usuario, pontuacao, certas) {
    console.log(`Acessando o model e enviando tentativa do usuário ${id_usuario}`);

    var instrucaoSql = `INSERT INTO ranking_quiz VALUES (DEFAULT, ${id_usuario}, DEFAULT, ${certas}, ${pontuacao});`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankingTop5() {
    console.log(`Acessando o model e puxando os Top 5 do Ranking do Quiz`);

    var instrucaoSql = `SELECT u.nome, MAX(rq.pontos) as pontuacao
                        FROM ranking_quiz rq
                        JOIN usuario u ON rq.fk_usuario = u.id_usuario
                        GROUP BY u.nome
                        ORDER BY pontuacao DESC
                        LIMIT 5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    enviarTentativa,
    rankingTop5
};