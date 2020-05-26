INSERT INTO stores(img,name, address, comment,rating)
VALUES
($1,$2,$3,$4,$5)
RETURNING *;