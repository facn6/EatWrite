BEGIN;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS moods CASCADE;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  email VARCHAR(50),
  password VARCHAR(500) NOT NULL
);

CREATE TABLE moods (
  mood_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  mood VARCHAR(20) NOT NULL,
  mood_date VARCHAR(30),
  mood_time VARCHAR(300)
);

ALTER TABLE moods ADD FOREIGN KEY (user_id) REFERENCES users (user_id);

INSERT INTO users (name, password) VALUES
('Ayah', 'f1b'),
('Kira', 'f1c'),
('Dana', 'f1d'),
('Ghassan', 'f1e');







 COMMIT;
