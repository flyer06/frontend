CREATE DATABASE college_db;   --  task1

USE college_db;

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18),
    email VARCHAR(100) UNIQUE,
    city VARCHAR(50) DEFAULT 'Chennai',
    admission_date DATE
);


-- task2

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salary DECIMAL(10,2) CHECK (salary > 10000),
    department VARCHAR(50) DEFAULT 'IT',
    joining_date DATE NOT NULL,
    status VARCHAR(20) DEFAULT 'Active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




-- task3
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(150) NOT NULL,
    product_code VARCHAR(30) UNIQUE,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) CHECK (price > 0),
    stock INT DEFAULT 0,
    brand VARCHAR(50) DEFAULT 'Generic',
    manufacture_date DATE,
    expiry_date DATE,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- task4

CREATE DATABASE college_db;

USE college_db;

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(100) NOT NULL,
    age INT CHECK (age >= 18),
    email VARCHAR(100) NOT NULL UNIQUE,
    mobile_number VARCHAR(15),
    course VARCHAR(100),
    fees DECIMAL(10,2) CHECK (fees > 0),
    admission_date DATE,
    city VARCHAR(50) DEFAULT 'Chennai'
);


