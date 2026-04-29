var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {

    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({

                            nome: resultadoAutenticar[0].nome,
                            email: resultadoAutenticar[0].email

                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }

            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o login! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;

    var equipe = req.body.equipeServer;
    var piloto = req.body.pilotoServer;
    var circuito = req.body.circuitoServer;
    var temporada = req.body.temporadaServer;
    var rivalidade = req.body.rivalidadeServer;
    var acompanhamento = req.body.acompanhamentoServer;

    var senha = req.body.senhaServer;

    // Faça as validações dos valores

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (equipe == undefined) {
        res.status(400).send("Sua equipe está undefined!");
    } else if (piloto == undefined) {
        res.status(400).send("Seu piloto está undefined!");
    } else if (circuito == undefined) {
        res.status(400).send("Seu circuito está undefined!");
    } else if (temporada == undefined) {
        res.status(400).send("Sua temporada está undefined!");
    } else if (rivalidade == undefined) {
        res.status(400).send("Sua rivalidade está undefined!");
    } else if (acompanhamento == undefined) {
        res.status(400).send("Seu acompanhamento está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(
            nome,
            email,
            equipe,
            piloto,
            circuito,
            temporada,
            rivalidade,
            acompanhamento,
            senha
        )
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
    autenticar,
    cadastrar
}