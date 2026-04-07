SELECT
  o.id,
  u.name,
  p.name
FROM orders o
INNER JOIN products p
  ON p.id = o.product_id
INNER JOIN users u
  ON u.id = o.user_id
  