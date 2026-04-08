SELECT 
    name, 
    price,
    ROW_NUMBER() OVER (ORDER BY price DESC) AS row_num 
FROM products;
