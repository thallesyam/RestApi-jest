create schema plants

create table plants.plants (
  id serial PRIMARY KEY,
  name text not null,
  contact text not null,
  image text not null,
  plantType text not null,
  description text,
  quantity integer not null,
  price text not null,
  date timestamp default now()
)

create schema shower

create table shower.shower (
  id serial PRIMARY KEY,
  name text not null,
  contact text not null,
  image text not null,
  herbs text[] not null,
  atuation text,
  quantity integer not null,
  price text not null,
  date timestamp default now()
)

create schema necklaces

create table necklaces.necklaces (
  id serial PRIMARY KEY,
  name text not null,
  contact text not null,
  image text not null,
  quantity integer not null,
  price text not null,
  date timestamp default now()
)
