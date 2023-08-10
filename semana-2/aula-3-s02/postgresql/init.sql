CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO usuarios (nome, email) VALUES
    ('Eu', 'eu@example.com'),
    ('Voce', 'voce@example.com'),
    ('Nos', 'nos@example.com');