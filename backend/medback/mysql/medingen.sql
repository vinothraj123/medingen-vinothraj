CREATE DATABASE medingen;
USE medingen;

CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50), password VARCHAR(50));
INSERT INTO users (username, password) VALUES ('admin', 'admin');

CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), brand VARCHAR(100), price DECIMAL(10,2), image_url TEXT);
INSERT INTO products (name, brand, price, image_url) VALUES ('Dolo 650', 'Micro Labs', 34.00, 'https://via.placeholder.com/100');
