SELECT AVG(rating)
FROM rating
WHERE store_id = $1;