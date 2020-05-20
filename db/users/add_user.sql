INSERT INTO users(username, hashed_password,  is_admin)
VALUES
($1, $2, $3)
RETURNING *;