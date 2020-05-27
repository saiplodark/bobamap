INSERT INTO stores (img, name, address, comment)
VALUES (${img},${name},${address},${comment})
RETURNING *;