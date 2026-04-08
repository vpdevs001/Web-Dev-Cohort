SELECT 
    name, 
    LAG(salary) OVER (ORDER BY salary DESC) AS previous_salary,
    salary
FROM employees;
