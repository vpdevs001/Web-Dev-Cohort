WITH high_price AS (
    SELECT id, name
    FROM products
    WHERE price > 100
),
electronics AS (
    SELECT id, name
    FROM products
    WHERE category_id = 1
)
SELECT hp.name
FROM high_price hp
INNER JOIN electronics e ON hp.id = e.id;
