CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  _id uuid DEFAULT uuid_generate_v4(),
  name TEXT,
  email TEXT NOT NULL UNIQUE,
  Password varchar NOT NULL,
  address TEXT NOT NULL,
  phone TEXT,
  firm TEXT,
  email_varified_at TIMESTAMP NULL
);

CREATE TABLE "users_varify_token"(
  id SERIAL PRIMARY KEY,
  user_id int NOT NULL,
  token TEXT NOT NULL
);

CREATE TABLE "compare_packages"(
  id SERIAL PRIMARY KEY,
  user_id int,
  FOREIGN KEY(user_id) REFERENCES users(id),
   package_id int,
  FOREIGN KEY(package_id) REFERENCES packages(id)
);

CREATE TABLE "feature_packages"(
  id SERIAL PRIMARY KEY,
  user_id int,
  FOREIGN KEY(user_id) REFERENCES users(id),
   package_id int,
  FOREIGN KEY(package_id) REFERENCES packages(id)
);

CREATE TABLE "user_forget_password_token"(
  id SERIAL PRIMARY KEY,
  user_id int,
  FOREIGN KEY(user_id) REFERENCES users(id),
    token TEXT NOT NULL

);


CREATE TABLE "user_block_status"(
  id SERIAL PRIMARY KEY,
  user_id int,
  FOREIGN KEY(user_id) REFERENCES users(id),
    status TEXT NOT NULL

);


CREATE TABLE lawyer(
  id SERIAL PRIMARY KEY,
  image TEXT,
  specialization TEXT,
  user_id int,
  FOREIGN KEY(user_id) REFERENCES users(id),
);


CREATE TABLE lawyer(
  id SERIAL PRIMARY KEY,
  image TEXT,
  specialization TEXT,
  user_id int,
  FOREIGN KEY(user_id) REFERENCES users(id),
);


CREATE TABLE invitation_link(
  id SERIAL PRIMARY KEY,
  email TEXT,
  hash_link TEXT,

);


CREATE TABLE cases(
  id SERIAL PRIMARY KEY,
  lawyer_id int,
  FOREIGN KEY(lawyer_id) REFERENCES lawyer(id),
  case_type text,
  case_status text,
  case_description text,
  status text,

);