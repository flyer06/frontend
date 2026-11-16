CREATE DATABASE sql_interview_db;

USE sql_interview_db;
-- task1
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    age INT,
    course VARCHAR(50),
    fees DECIMAL(10,2),
    city VARCHAR(50)
);

-- task2
SELECT student_name, course, fees
FROM students
WHERE city = 'Chennai'
AND fees > 20000;

-- task3


UPDATE students
SET course = 'Full Stack',
    fees = 30000
WHERE student_id = 1;

-- task4

SELECT
    course,
    COUNT(*) AS total_students,
    SUM(fees) AS total_fees
FROM students
GROUP BY course
HAVING COUNT(*) > 1;

-- task5

START TRANSACTION;

UPDATE students
SET fees = 35000
WHERE student_id = 2;

-- Check the updated value
SELECT * FROM students
WHERE student_id = 2;

-- Undo the update
ROLLBACK;

-- Check the original value
SELECT * FROM students
WHERE student_id = 2;