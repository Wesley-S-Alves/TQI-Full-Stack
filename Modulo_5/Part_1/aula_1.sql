CREATE TABLE pessoas ( 
    id NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
)

INSERT INTO pessoas(nome, nascimento) VALUES('Wesley', '1993-03-25')
INSERT INTO pessoas(nome, nascimento) VALUES('Paulo', '1998-07-14')
INSERT INTO pessoas(nome, nascimento) VALUES('Helena', '200-05-20')