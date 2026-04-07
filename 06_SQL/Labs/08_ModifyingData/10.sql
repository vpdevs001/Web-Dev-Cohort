INSERT INTO categories (name, description)
SELECT DISTINCT 
    p.name AS "New Category", 
    'Imported from products' AS description
FROM products p
WHERE NOT EXISTS (
    SELECT 1 
    FROM categories c 
    WHERE c.name = p.name
);
