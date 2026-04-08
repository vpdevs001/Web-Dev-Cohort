SELECT
  o.id,
  u.name,
  o.user_id
FROM orders o
INNER JOIN users u
  ON u.id = o.user_id
