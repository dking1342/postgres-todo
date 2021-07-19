-- create a database
CREATE DATABASE todo;
-- delete a database
DROP DATABASE todo;

-- create a table
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
-- delete a table
DROP TABLE todo;
-- update column of table
-- delete column of table
-- add constraints
-- remove constraints
-- add unique column
-- remove column


---------------------------------------------------------
-- CRUD operations

-- post entries
-- insert new entry into table by column name
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
-- insert new entry with all columns
INSERT INTO table_name
VALUES (value1, value2, value3, ...);

-- get entries
-- get entries from table
SELECT column1, column2, ...
FROM table_name;
-- get all entries from table
SELECT * FROM table_name;
-- get distinct entries from table
SELECT DISTINCT column1, column2, ...
FROM table_name;
-- get filtered entries from table
SELECT column1, column2, ...
FROM table_name
WHERE condition;
-- get entries with AND syntax
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;
-- get entries with OR syntax
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;
-- get entries with NOT syntax
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
-- get entries ordered by
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
-- get entries that are NULL
SELECT column_names
FROM table_name
WHERE column_name IS NULL;
-- get entries that are NOT NULL
SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL;

-- put entries
-- update entry from table
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

-- delete entries
DELETE FROM table_name WHERE condition;