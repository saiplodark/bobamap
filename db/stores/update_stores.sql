UPDATE stores
SET comment = $2
WHERE store_id = $1;