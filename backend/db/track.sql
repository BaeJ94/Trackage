DROP DATABASE IF EXISTS trackage;
CREATE DATABASE trackage;

\c trackage;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR UNIQUE NOT NULL,
  password_digest VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login_date	DATE
);

INSERT INTO users (user_name, password_digest, email) VALUES ('pursuit', '$2a$10$9eZBe6FRcdBRlK8pv7lE2.ptT9XiqnUWxVJv.nZx61JNyBWzFrsri', 'pursuit@pursuit.org'), ('demo', '$2a$10$9eZBe6FRcdBRlK8pv7lE2.ptT9XiqnUWxVJv.nZx61JNyBWzFrsri', 'demo@demo.com');