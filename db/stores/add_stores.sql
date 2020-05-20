INSERT INTO stores(name, address, comment,rating)
VALUES
($1,$2,$3,$4)
RETURNING *;