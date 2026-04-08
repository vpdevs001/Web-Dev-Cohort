SELECT 
  name, 
  COALESCE(phone, 'No phone') AS phone
FROM users;
