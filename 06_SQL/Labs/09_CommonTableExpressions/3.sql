WITH order_totals AS (
    SELECT user_id, SUM(quantity) AS total_quantity
    FROM orders
    GROUP BY user_id
)

SELECT 
    u.name, 
    ot.total_quantity
FROM order_totals ot
JOIN users u ON ot.user_id = u.id
WHERE ot.total_quantity > 2;
