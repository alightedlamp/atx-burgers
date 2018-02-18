CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burger (
    id INT AUTO_INCREMENT,
    name VARCHAR(55) NOT NULL,
    restaurant_id INT NOT NULL,
    devoured TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurant (id)
);

CREATE TABLE restaurant (
    id INT AUTO_INCREMENT,
    name VARCHAR(55) NOT NULL,
    address VARCHAR(255) NOT NULL,
    yelp_rating INT,
    PRIMARY KEY (id)
);