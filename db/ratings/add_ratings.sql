INSERT INTO rating( rating, store_id)
VALUES($1,$2)
RETURNING * ;