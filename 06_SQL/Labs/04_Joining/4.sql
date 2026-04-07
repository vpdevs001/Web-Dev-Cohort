SELECT
  p.name,
  r.comment
FROM reviews r
RIGHT JOIN products p ON p.id = r.product_id
