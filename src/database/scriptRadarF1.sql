CREATE DATABASE radarF1;
USE radarF1;

CREATE TABLE equipe (
    id_equipe INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO equipe (nome) VALUES
('Alpine'),
('Aston Martin'),
('Audi'),
('Cadillac'),
('Ferrari'),
('Haas'),
('McLaren'),
('Mercedes'),
('Racing Bulls'),
('Red Bull'),
('Williams'),
('Não sei'),
('Outra');

CREATE TABLE piloto (
    id_piloto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE,
    fk_equipe INT,
    CONSTRAINT fk_piloto_equipe
        FOREIGN KEY (fk_equipe)
        REFERENCES equipe(id_equipe)
);

INSERT INTO piloto (nome, fk_equipe) VALUES
('Alex Albon', 11),             
('Andrea Kimi Antonelli', 8),  
('Arvid Lindblad', 9),         
('Carlos Sainz', 11),       
('Charles Leclerc', 5),       
('Esteban Ocon', 6),       
('Fernando Alonso', 2),    
('Franco Colapinto', 1),   
('Gabriel Bortoleto', 3),    
('George Russell', 8),      
('Isack Hadjar', 10),          
('Lance Stroll', 2),        
('Lando Norris', 7),      
('Lewis Hamilton', 5),     
('Liam Lawson', 10),         
('Max Verstappen', 10),       
('Nico Hulkenberg', 3),       
('Oliver Bearman', 6),      
('Oscar Piastri', 7),          
('Pierre Gasly', 1),           
('Sergio Perez', 4),          
('Valtteri Bottas', 4),       
('Não sei', 12),             
('Outro', 13);                

CREATE TABLE circuito (
    id_circuito INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO circuito (nome) VALUES
('GP de Abu Dhabi'),
('GP da Arábia Saudita'),
('GP da Austrália'),
('GP da Áustria'),
('GP do Azerbaijão'),
('GP da Bélgica'),
('GP de São Paulo'),
('GP do Canadá'),
('GP do Catar'),
('GP da China'),
('GP da Emília-Romanha'),
('GP da Espanha (Madrid)'),
('GP dos Estados Unidos'),
('GP de Las Vegas'),
('GP de Miami'),
('GP da Holanda'),
('GP da Hungria'),
('GP da Itália'),
('GP do Japão'),
('GP da Cidade do México'),
('GP de Mônaco'),
('GP da Grã-Bretanha'),
('GP de Singapura'),
('Não sei'),
('Outra');

CREATE TABLE rivalidade (                           
    id_rivalidade INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO rivalidade (nome) VALUES
('Senna vs Prost'),
('Hamilton vs Verstappen'),
('Lauda vs Hunt'),
('Schumacher vs Hakkinen'),
('Vettel vs Alonso'),
('Piquet vs Mansell'),
('Rosberg vs Hamilton'),
('Senna vs Mansell'),
('Não sei'),
('Outra');

CREATE TABLE temporada (
    id_temporada INT PRIMARY KEY AUTO_INCREMENT,
    ano VARCHAR(20) NOT NULL UNIQUE
);

INSERT INTO temporada (ano) VALUES
('1950'),
('1961'),
('1968'),
('1976'),
('1984'),
('1988'),
('1989'),
('1991'),
('1994'),
('1998'),
('2000'),
('2003'),
('2007'),
('2008'),
('2010'),
('2012'),
('2014'),
('2016'),
('2018'),
('2021'),
('2022'),
('2023'),
('2024'),
('2025'),
('Não sei'),
('Outra');

CREATE TABLE acompanhamento (
    id_acompanhamento INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO acompanhamento (descricao) VALUES
('Menos de 1 ano'),
('Entre 1 a 3 anos'),
('Entre 3 a 5 anos'),
('Entre 5 e 10 anos'),
('Mais de 10 anos');

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,

    fk_equipe INT, 
    fk_piloto INT, 
    fk_circuito INT, 
    fk_rivalidade INT, 
    fk_temporada INT, 
    fk_acompanhamento INT, 
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_usuario_equipe
        FOREIGN KEY (fk_equipe)
        REFERENCES equipe(id_equipe),

    CONSTRAINT fk_usuario_piloto
        FOREIGN KEY (fk_piloto)
        REFERENCES piloto(id_piloto),

    CONSTRAINT fk_usuario_circuito
        FOREIGN KEY (fk_circuito)
        REFERENCES circuito(id_circuito),

    CONSTRAINT fk_usuario_rivalidade
        FOREIGN KEY (fk_rivalidade)
        REFERENCES rivalidade(id_rivalidade),

    CONSTRAINT fk_usuario_temporada
        FOREIGN KEY (fk_temporada)
        REFERENCES temporada(id_temporada),

    CONSTRAINT fk_usuario_acompanhamento
        FOREIGN KEY (fk_acompanhamento)
        REFERENCES acompanhamento(id_acompanhamento)
);

CREATE TABLE ranking_quiz (
    id_ranking INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    data_quiz DATETIME DEFAULT CURRENT_TIMESTAMP,
    pontos INT,

    CONSTRAINT fk_quiz_usuario
        FOREIGN KEY (fk_usuario)
        REFERENCES usuario(id_usuario)
);