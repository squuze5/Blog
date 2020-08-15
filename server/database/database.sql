CREATE DATABASE clearmove_blog;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    author VARCHAR(40),
    text VARCHAR(255)
);

INSERT INTO posts (author, text)
    VALUES ('Alex', 'Post from Alex'),
          ('Sasha', 'Post from Sasha');

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email VARCHAR(40),
    password VARCHAR(40),
    role VARCHAR(40)
);
