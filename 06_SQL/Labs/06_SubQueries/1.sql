SELECT
  name, price
FROM products
WHERE price > 
(SELECT AvG(price) FROM products);
