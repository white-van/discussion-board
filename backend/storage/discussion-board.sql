CREATE TYPE position_types AS ENUM ('Student', 'TA', 'Instructor');

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name varchar(50),
  last_name varchar(50),
  preferred_name varchar(50),
  email varchar(320) UNIQUE NOT NULL
);

CREATE TABLE semesters (
  id SERIAL PRIMARY KEY,
  semester_season varchar(100) NOT NULL,
  semester_year int NOT NULL
);

CREATE TABLE institutions (
  id SERIAL PRIMARY KEY,
  name varchar(100) NOT NULL,
  location varchar(100)
);

CREATE TABLE administrators (
  user_id int,
  institution_id int,
  PRIMARY KEY (user_id, institution_id)
);

CREATE TABLE enrolment (
  user_id int NOT NULL,
  course_id int NOT NULL,
  position position_types NOT NULL,
  PRIMARY KEY (user_id, course_id)
);

CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  course_name varchar(100),
  course_code varchar(50) NOT NULL,
  semester_id int,
  is_archived boolean
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category_name varchar(100) NOT NULL,
  course int
);

CREATE TABLE post_categories (
  category_id int,
  post_id int,
  PRIMARY KEY (category_id, post_id)
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  author int,
  parent_id int,
  num_children int DEFAULT 0,
  title varchar(200) NOT NULL,
  body varchar,
  image int,
  upvotes int DEFAULT 0,
  view_count int DEFAULT 0,
  created_at timestamp with time zone DEFAULT (now()),
  updated_at timestamp with time zone DEFAULT (now())
);

CREATE TABLE award_types (
  id SERIAL PRIMARY KEY,
  name varchar(50) NOT NULL,
  image int
);

CREATE TABLE awards (
  id SERIAL PRIMARY KEY,
  award_type int,
  post int,
  gifter int
);

ALTER TABLE administrators ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE administrators ADD FOREIGN KEY (institution_id) REFERENCES institutions (id);

ALTER TABLE enrolment ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE enrolment ADD FOREIGN KEY (course_id) REFERENCES courses (id);

ALTER TABLE courses ADD FOREIGN KEY (semester_id) REFERENCES semesters (id);

ALTER TABLE categories ADD FOREIGN KEY (course) REFERENCES courses (id);

ALTER TABLE post_categories ADD FOREIGN KEY (category_id) REFERENCES categories (id);

ALTER TABLE post_categories ADD FOREIGN KEY (post_id) REFERENCES posts (id);

ALTER TABLE posts ADD FOREIGN KEY (author) REFERENCES users (id);

ALTER TABLE posts ADD FOREIGN KEY (parent_id) REFERENCES posts (id);

ALTER TABLE awards ADD FOREIGN KEY (award_type) REFERENCES award_types (id);

ALTER TABLE awards ADD FOREIGN KEY (post) REFERENCES posts (id);

ALTER TABLE awards ADD FOREIGN KEY (gifter) REFERENCES users (id);

