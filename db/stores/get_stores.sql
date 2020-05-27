--Join rating table here
SELECT s.img, s.name, s.address, s.comment, r.rating
FROM  stores s
FULL OUTER JOIN  rating r ON s.store_id = r.store_id;
