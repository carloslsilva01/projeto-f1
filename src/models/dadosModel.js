var database = require("../database/config")


// Funções Para Dados da KPI

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

function buscarPilotoPopular() {
    console.log('Buscando Piloto Mais Popular do Sistema');

    var instrucaoSql = 
    `SELECT p.nome, COUNT(u.fk_piloto) AS quantidade_fas
    FROM usuario u
    JOIN piloto p ON p.id_piloto = u.fk_piloto
    GROUP BY p.nome
    ORDER BY quantidade_fas DESC LIMIT 1;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorcentagemAcertoQuiz() {
    console.log('Buscando Porcentagem(%) de Acerto do Quiz');

    var instrucaoSql = 
    `SELECT TRUNCATE(AVG((melhor_pontuacao / 15) * 100), 1) AS porcentagem
    FROM (
    SELECT MAX(acertos) AS melhor_pontuacao
    FROM ranking_quiz
    GROUP BY fk_usuario
    ) AS melhores_resultados;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Funções para Dados dos Gráficos
function buscarTop5equipesFavoritas() {
    console.log('Buscando as Top 5 Equipes Favoritas');

    var instrucaoSql = 
    `SELECT e.nome, COUNT(u.fk_equipe) AS fas FROM usuario u
    JOIN equipe e ON e.id_equipe = u.fk_equipe
    GROUP BY e.nome 
    ORDER BY fas DESC
    LIMIT 5;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTop5pilotosFavoritos() {
    console.log('Buscando os Top 5 Pilotos Favoritos');

    var instrucaoSql = 
    `SELECT p.nome, COUNT(u.fk_piloto) AS fas FROM usuario u
    JOIN piloto p ON p.id_piloto = u.fk_piloto
    GROUP BY p.nome 
    ORDER BY fas DESC
    LIMIT 5;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTempoDeAcompanhamento() {
    console.log('Buscando o Tempo de Acompanhamento dos Fãs');

    var instrucaoSql =
    `SELECT a.descricao AS tempo, COUNT(u.fk_acompanhamento) AS quantidade FROM usuario u
    JOIN acompanhamento a ON u.fk_acompanhamento = a.id_acompanhamento
    GROUP BY a.descricao
    ORDER BY a.id_acompanhamento;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEquipeTempo(idAcompanhamento) {
    console.log('Buscando Equipes por Tempo de Acompanhamento');

    var instrucaoSql = 
    `SELECT e.nome AS equipe, COUNT(*) AS quantidade FROM usuario u
    JOIN equipe e ON u.fk_equipe = e.id_equipe
    JOIN acompanhamento a ON u.fk_acompanhamento = a.id_acompanhamento
    WHERE a.id_acompanhamento = ${idAcompanhamento}
    GROUP BY e.nome
    HAVING quantidade > 0
    ORDER BY quantidade DESC;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUsuariosTotal,
    buscarEquipePopular,
    buscarPilotoPopular,
    buscarPorcentagemAcertoQuiz,
    buscarTop5equipesFavoritas,
    buscarTop5pilotosFavoritos,
    buscarTempoDeAcompanhamento,
    buscarEquipeTempo
};