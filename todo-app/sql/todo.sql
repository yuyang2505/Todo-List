-- SQL statement to create a todos table

CREATE TABLE todos(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  is_completed BOOLEAN NOT NULL,
  created_at TIMESTAMP NOT NULL
)