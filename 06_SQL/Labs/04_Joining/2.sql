SELECT
o.id,
u.name,
o.quantity
FROM orders o
INNER JOIN users u ON o.user_id = u.id
