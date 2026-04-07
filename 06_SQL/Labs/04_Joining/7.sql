SELECT
  o.id,
  u.name,
  u.country
FROM orders o
INNER JOIN users u
  ON u.id = o.user_id
WHERE country = 'USA'
