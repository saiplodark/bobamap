SELECT s.store_id, s.img, s.name, s.address, s.comment, AVG AS average  
FROM stores s 
LEFT OUTER JOIN 
(SELECT store_id, AVG(rating) FROM rating GROUP BY store_id) AS r 
ON s.store_id = r.store_id;