-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS stores;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    hashed_password CHAR(16),
    is_admin BOOLEAN
);

CREATE TABLE stores(
    store_id SERIAL PRIMARY KEY,
    name VARCHAR(32),
    address NCHAR,
    comment TEXT,
);

CREATE TABLE rating(
    rating_id SERIAL PRIMARY KEY,
    rating TINYINT,
    store_id INT REFERENCES stores(store_id)
);