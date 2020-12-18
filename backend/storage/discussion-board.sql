CREATE TYPE position_types AS ENUM ('Student', 'TA', 'Instructor');
CREATE TYPE vote_types AS ENUM ('upvote', 'downvote');

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  first_name varchar(50),
  last_name varchar(50),
  preferred_name varchar(50),
  email varchar(320) UNIQUE NOT NULL
);

CREATE TABLE institutions (
  institution_id SERIAL PRIMARY KEY,
  name varchar(100) NOT NULL,
  location varchar(100)
);

CREATE TABLE semesters (
  semester_id SERIAL PRIMARY KEY,
  semester_name varchar(100) NOT NULL,
  institution_id int NOT NULL REFERENCES institutions (institution_id) ON DELETE CASCADE
);

CREATE TABLE administrators (
  user_id int REFERENCES users (user_id) ON DELETE CASCADE,
  institution_id int REFERENCES institutions (institution_id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, institution_id)
);

CREATE TABLE courses (
  course_id SERIAL PRIMARY KEY,
  course_name varchar(100),
  course_code varchar(50) NOT NULL,
  semester_id int REFERENCES semesters (semester_id) ON DELETE CASCADE,
  is_archived boolean DEFAULT false
);

CREATE TABLE enrolment (
  user_id int REFERENCES users (user_id) ON DELETE CASCADE,
  course_id int REFERENCES courses (course_id) ON DELETE CASCADE,
  position position_types NOT NULL,
  question_contributions int DEFAULT 0 NOT NULL,
  answer_contributions int DEFAULT 0 NOT NULL,
  PRIMARY KEY (user_id, course_id)
);

CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  category_name varchar(100) NOT NULL,
  course_id int REFERENCES courses (course_id) ON DELETE CASCADE
);

CREATE TABLE thread (
  thread_id SERIAL PRIMARY KEY,
  author int REFERENCES users (user_id) ON DELETE CASCADE,
  parent_id int REFERENCES thread (thread_id) ON DELETE CASCADE,
  num_children int DEFAULT 0 NOT NULL,
  course_id int REFERENCES courses (course_id) ON DELETE CASCADE,
  title varchar(200),
  body text,
  img int,
  upvotes int DEFAULT 0 NOT NULL,
  view_count int DEFAULT 0 NOT NULL,
  created_at timestamp with time zone DEFAULT (now()),
  updated_at timestamp with time zone DEFAULT (now()),
  is_locked boolean DEFAULT false,
  is_anon boolean DEFAULT false
);

CREATE TABLE thread_categories (
  category_id int REFERENCES categories (category_id) ON DELETE CASCADE,
  thread_id int REFERENCES thread (thread_id) ON DELETE CASCADE,
  PRIMARY KEY (category_id, thread_id)
);

CREATE TABLE comments (
  comment_id SERIAL PRIMARY KEY,
  author int REFERENCES users (user_id) ON DELETE CASCADE,
  parent_id int REFERENCES thread (thread_id) ON DELETE CASCADE,
  body text NOT NULL,
  created_at timestamp with time zone DEFAULT (now()),
  updated_at timestamp with time zone DEFAULT (now()),
  is_locked boolean DEFAULT false,
  is_anon boolean DEFAULT false
);

CREATE TABLE post_votes (
  user_id int REFERENCES users (user_id) ON DELETE CASCADE,
  thread_id int REFERENCES thread (thread_id) ON DELETE CASCADE,
  vote vote_types NOT NULL, 
  PRIMARY KEY (user_id, thread_id)
);

CREATE TABLE polls (
  poll_id SERIAL PRIMARY KEY,
  thread_id int REFERENCES threads (thread_id) ON DELETE CASCADE,
  opt_1_name varchar(50) NOT NULL,
  opt_2_name varchar(50) NOT NULL,
  opt_3_name varchar(50),
  opt_4_name varchar(50),
  opt_1_votes int DEFAULT 0 NOT NULL,
  opt_2_votes int DEFAULT 0 NOT NULL,
  opt_3_votes int,
  opt_4_votes int,
  created_at timestamp with time zone DEFAULT (now()),
  closes_at timestamp with time zone DEFAULT (now())
);

CREATE TABLE poll_results (
  vote_id SERIAL PRIMARY KEY,
  poll_id int REFERENCES polls (poll_id) ON DELETE CASCADE,
  user_id int REFERENCES users (user_id) ON DELETE CASCADE,
  choice int
);

CREATE TABLE award_types (
  award_type_id SERIAL PRIMARY KEY,
  award_name varchar(50) NOT NULL,
  award_image int
);

CREATE TABLE awards (
  award_id SERIAL PRIMARY KEY,
  award_type int REFERENCES award_types (award_type_id) ON DELETE CASCADE,
  thread int REFERENCES thread (thread_id) ON DELETE CASCADE,
  gifter int REFERENCES users (user_id) ON DELETE CASCADE
);
