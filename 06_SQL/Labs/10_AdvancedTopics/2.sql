SELECT
  age,
  country,
  name,
  RANK() OVER (PARTITION BY country ORDER BY age ASC) AS rank
FROM users;
