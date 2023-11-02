CREATE DATABASE backend1;
USE backend1;

CREATE TABLE cliente(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    idade INT NOT NULL
);

INSERT INTO cliente(id,nome,idade) VALUES (1,'HUMMBape',82)

INSERT INTO cliente(id,nome,idade) VALUES (3,'JsonMomoa',87);
INSERT INTO cliente(id,nome,idade) VALUES (4,'Richas',14);