CREATE DATABASE sql_practice;

USE sql_practice;

-- task1

CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100),
    department VARCHAR(50),
    salary INT
);
INSERT INTO employees (emp_name, department, salary)
VALUES
('Arun', 'IT', 45000),
('Kumar', 'IT', 25000),
('Priya', 'HR', 35000),
('Ravi', 'IT', 50000);


-- task2

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100),
    age INT,
    city VARCHAR(50)
);

INSERT INTO students (student_name, age, city)
VALUES
('Arun', 20, 'Chennai'),
('Kumar', 22, 'Madurai'),
('Priya', 26, 'Chennai'),
('Ravi', 19, 'Coimbatore'),
('Divya', 24, 'Madurai');



-- task3

CREATE TABLE emplo (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100),
    department VARCHAR(50)
);
INSERT INTO employees (emp_name, department)
VALUES
('Arun', 'IT'),
('Kumar', 'HR'),
('Priya', 'IT'),
('Ravi', 'Sales'),
('Divya', 'HR');


-- task4

CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100),
    category VARCHAR(50),
    stock INT,
    price DECIMAL(10,2)
);

INSERT INTO products (product_name, category, stock, price)
VALUES
('Laptop', 'Electronics', 10, 45000),
('Mobile', 'Electronics', 20, 15000),
('Shirt', 'Clothing', 50, 800),
('Jeans', 'Clothing', 25, 1200);

-- task5

CREATE TABLE emp (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100),
    department VARCHAR(50),
    salary INT
);

INSERT INTO employees (emp_name, department, salary)
VALUES
('Arun', 'IT', 50000),
('Kumar', 'IT', 45000),
('Priya', 'HR', 30000),
('Ravi', 'HR', 25000),
('Divya', 'Sales', 55000),
('Ajay', 'Sales', 35000);

