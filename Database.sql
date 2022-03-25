CREATE DATABASE IF NOT EXISTS user_api;
USE user_api;

CREATE TABLE IF NOT EXISTS users(
	id INT NOT NULL auto_increment PRIMARY KEY,
    user_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(30) NOT NULL
);

INSERT INTO users(user_name, email, password)
	Values('Vitinho', 'email@yahoo.com.br', '123456');
  