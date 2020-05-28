DELETE  FROM rating
WHERE store_id = $1;

DELETE  FROM stores
WHERE store_id = $1;