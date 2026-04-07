DELETE FROM reviews r
USING users u
WHERE r.user_id = u.id AND u.country = 'Australia';
