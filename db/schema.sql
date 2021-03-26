DROP DATABASE if exists burgers_db
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(25) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE
)