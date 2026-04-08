SELECT 
    users.name, 
    orders.order_date
FROM 
    users
JOIN 
    orders ON users.id = orders.user_id
WHERE 
    orders.order_date BETWEEN '2024-01-01' AND '2024-01-31';--
