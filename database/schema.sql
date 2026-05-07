-- Phase B shared database schema for the Online Car Sale / SURPASS website.
-- Run this file once before testing PHP registration, login, add-car, and search.

CREATE DATABASE IF NOT EXISTS online_car_sale
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE online_car_sale;

CREATE TABLE IF NOT EXISTS sellers (
    seller_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    email VARCHAR(160) NOT NULL,
    username VARCHAR(60) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_sellers_email (email),
    UNIQUE KEY uq_sellers_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS cars (
    car_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    seller_id INT UNSIGNED NOT NULL,
    brand VARCHAR(80) NOT NULL,
    model VARCHAR(120) NOT NULL,
    year SMALLINT UNSIGNED NOT NULL,
    color VARCHAR(80) NOT NULL,
    location VARCHAR(120) NOT NULL,
    price DECIMAL(12,2) NOT NULL,
    image_url VARCHAR(500) DEFAULT NULL,
    body_style VARCHAR(80) DEFAULT NULL,
    mileage INT UNSIGNED DEFAULT NULL,
    fuel VARCHAR(80) DEFAULT NULL,
    transmission VARCHAR(120) DEFAULT NULL,
    power VARCHAR(80) DEFAULT NULL,
    torque VARCHAR(80) DEFAULT NULL,
    acceleration VARCHAR(80) DEFAULT NULL,
    top_speed VARCHAR(80) DEFAULT NULL,
    drivetrain VARCHAR(120) DEFAULT NULL,
    seats TINYINT UNSIGNED DEFAULT NULL,
    vehicle_condition VARCHAR(80) DEFAULT 'Used',
    seller_type VARCHAR(80) DEFAULT 'Private seller',
    market_note VARCHAR(255) DEFAULT NULL,
    featured TINYINT(1) NOT NULL DEFAULT 0,
    description TEXT DEFAULT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_cars_seller
        FOREIGN KEY (seller_id)
        REFERENCES sellers (seller_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    KEY idx_cars_model_year (model, year),
    KEY idx_cars_brand (brand),
    KEY idx_cars_year (year),
    KEY idx_cars_price (price),
    KEY idx_cars_featured (featured),
    KEY idx_cars_seller (seller_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
