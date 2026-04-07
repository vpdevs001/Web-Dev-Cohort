SELECT
  p.name,
  r.rating
FROM products p
LEFT JOIN reviews r ON r.product_id = p.id
