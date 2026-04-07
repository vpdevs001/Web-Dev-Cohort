UPDATE orders
SET status = 'priority'
FROM orders o
JOIN users u ON o.user_id = u.id
WHERE u.country = 'USA';
