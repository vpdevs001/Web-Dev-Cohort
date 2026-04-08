WITH usa_users AS (
    SELECT name, city
    FROM users
    WHERE country = 'USA'
)
SELECT * FROM usa_users;
