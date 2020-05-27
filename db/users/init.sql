-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS stores;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    hashed_password VARCHAR,
    is_admin BOOLEAN
);

CREATE TABLE stores(
    store_id SERIAL PRIMARY KEY,
    img TEXT,
    name VARCHAR,
    address VARCHAR,
    comment TEXT
);

CREATE TABLE rating(
    rating_id SERIAL PRIMARY KEY,
    rating INT,
    store_id INT REFERENCES stores(store_id)
);