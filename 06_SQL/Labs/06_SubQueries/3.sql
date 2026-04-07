SELECT
  name,
  email
FROM users
WHERE EXISTS (
    SELECT 1 
    FROM orders 
    WHERE users.id = orders.user_id
);
