-- task1
CREATE DATABASE colle_db;

USE colle_db;

CREATE TABLE students (

    student_id INT PRIMARY KEY AUTO_INCREMENT,
    
    name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18),
    
    email VARCHAR(100) UNIQUE,
    course VARCHAR(100) NOT NULL,
    
    fees DECIMAL(10,2) DEFAULT 0,
    admission_date DATE
);


-- task2

CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2),
    department VARCHAR(50),
    joining_date DATE,
    city VARCHAR(50)
);


-- task3
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL UNIQUE,
    price DECIMAL(10,2) CHECK (price > 0),
    category VARCHAR(50) NOT NULL,
    stock INT DEFAULT 0 CHECK (stock >= 0),
    manufacturing_date DATE
);

-- task4

CREATE TABLE patients (
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_name VARCHAR(100) NOT NULL,
    age INT,
    gender VARCHAR(20),
    disease VARCHAR(100),
    admission_date DATE,
    doctor_name VARCHAR(100)
);

-- task5
CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    duration INT DEFAULT 3,
    fees DECIMAL(10,2) CHECK (fees > 0),
    trainer_name VARCHAR(100),
    start_date DATE
);

-- task6
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    city VARCHAR(50),
    age INT,
    registration_date DATE
);

INSERT INTO customers
(name, email, city, age, registration_date)
VALUES
('Arun', 'arun@gmail.com', 'Chennai', 22, '2026-01-01'),
('Kumar', 'kumar@gmail.com', 'Madurai', 24, '2026-01-02'),
('Ravi', 'ravi@gmail.com', 'Trichy', 25, '2026-01-03'),
('Priya', 'priya@gmail.com', 'Salem', 23, '2026-01-04'),
('Ajay', 'ajay@gmail.com', 'Chennai', 26, '2026-01-05'),
('Vijay', 'vijay@gmail.com', 'Erode', 28, '2026-01-06'),
('Siva', 'siva@gmail.com', 'Thanjavur', 21, '2026-01-07'),
('Divya', 'divya@gmail.com', 'Madurai', 22, '2026-01-08'),
('Manoj', 'manoj@gmail.com', 'Coimbatore', 27, '2026-01-09'),
('Ram', 'ram@gmail.com', 'Salem', 29, '2026-01-10');

INSERT INTO customers
(name, email, city, age, registration_date)
VALUES
('Bala', 'bala@gmail.com', 'Chennai', 24, '2026-01-11');

INSERT INTO customers
(name, email, city, age, registration_date)
VALUES
('Deepa', 'deepa@gmail.com', 'Trichy', 25, '2026-01-12');


INSERT INTO customers (name, city)
VALUES ('Sanjay', 'Madurai');


SELECT * FROM customers;

-- task7

CREATE TABLE staff (
    staff_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    city VARCHAR(50)
);


INSERT INTO staff (name, department, salary, city)
VALUES
('Arun', 'HR', 25000, 'Madurai'),
('Kumar', 'IT', 35000, 'Chennai'),
('Ravi', 'HR', 30000, 'Trichy'),
('Priya', 'Finance', 40000, 'Salem'),
('Ajay', 'Sales', 28000, 'Erode'),
('Vijay', 'HR', 32000, 'Madurai'),
('Siva', 'IT', 45000, 'Trichy'),
('Manoj', 'Sales', 38000, 'Coimbatore');


UPDATE staff
SET salary = 45000
WHERE staff_id = 3;


UPDATE staff
SET department = 'IT'
WHERE staff_id = 5;


UPDATE staff
SET salary = salary + 5000
WHERE department = 'HR';


UPDATE staff
SET city = 'Chennai'
WHERE salary > 30000;


SELECT * FROM staff;

-- task8

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100),
    product_name VARCHAR(100),
    quantity INT,
    price DECIMAL(10,2),
    order_date DATE
);
INSERT INTO orders
(customer_name, product_name, quantity, price, order_date)
VALUES
('Arun', 'Laptop', 2, 50000, '2026-01-01'),
('Kumar', 'Mouse', 1, 400, '2026-01-02'),
('Ravi', 'Keyboard', 3, 800, '2026-01-03'),
('Priya', 'Pen', 1, 100, '2026-01-04'),
('Ajay', 'Monitor', 2, 8000, '2026-01-05'),
('Vijay', 'USB Cable', 1, 300, '2026-01-06'),
('Siva', 'Headphones', 4, 1200, '2026-01-07'),
('Manoj', 'Speaker', 2, 1500, '2026-01-08'),
('Ram', 'Notebook', 5, 200, '2026-01-09'),
('Bala', 'Mobile', 1, 15000, '2026-01-10');


DELETE FROM orders
WHERE order_id = 4;


DELETE FROM orders
WHERE quantity < 2;


DELETE FROM orders
WHERE price < 500 AND quantity < 5;


SELECT * FROM orders;

-- task9

CREATE DATABASE library_db;

USE library_db;

CREATE TABLE books (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    book_name VARCHAR(100),
    author VARCHAR(100),
    price DECIMAL(10,2),
    published_date DATE
);


INSERT INTO books
(book_name, author, price, published_date)
VALUES
('Python Basics', 'John', 500, '2022-01-01'),
('Java Programming', 'David', 600, '2021-05-10'),
('HTML Guide', 'Arun', 300, '2023-02-15'),
('SQL Basics', 'Kumar', 450, '2024-03-20'),
('React Guide', 'Robert', 700, '2025-01-10');
SELECT * FROM books;
TRUNCATE TABLE books;
SELECT * FROM books;
SHOW TABLES;


-- task10

CREATE DATABASE company_db;

USE company_db;
CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100),
    location VARCHAR(100)
);
CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(100),
    salary DECIMAL(10,2),
    department_id INT
);


INSERT INTO departments (department_name, location)
VALUES
('HR', 'Chennai'),
('IT', 'Madurai'),
('Finance', 'Coimbatore'),
('Sales', 'Trichy'),
('Marketing', 'Salem');


INSERT INTO employees
(employee_name, salary, department_id)
VALUES
('Arun', 25000, 1),
('Kumar', 35000, 2),
('Ravi', 30000, 3),
('Priya', 40000, 4),
('Ajay', 45000, 5);
SHOW TABLES;
SELECT * FROM departments;
SELECT * FROM employees;
DROP TABLE departments;
SHOW TABLES;
DROP DATABASE company_db;

