INSERT INTO stores (img,name, address, comment)
VALUES
($1,$2,$3,$4)
RETURNING *;