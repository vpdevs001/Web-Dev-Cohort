SELECT 
    country, 
    COUNT(*) as count
FROM users
GROUP BY ROLLUP(country);
