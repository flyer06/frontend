CREATE DATABASE col_db;

USE col_db;

CREATE TABLE department (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL,
     department_category VARCHAR(50),
     department_count INT,
     status boolean default true
);

INSERT INTO department (department_name, department_category, department_count)
VALUES
('IT', 'Technical', 25),
('HR', 'Management', 10),
('Finance', 'Accounts', 15),
('Production', 'Manufacturing', 30);
select * from department
