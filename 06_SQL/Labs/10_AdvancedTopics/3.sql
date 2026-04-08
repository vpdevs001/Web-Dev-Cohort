SELECT 
    name, 
    price,
    CASE 
        WHEN price > 100 THEN 'Expensive'
        WHEN price >= 20 THEN 'Medium'
        ELSE 'Cheap'
    END AS price_category
FROM products;
