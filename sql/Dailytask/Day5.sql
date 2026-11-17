-- task1

CREATE DATABASE training_db;
USE training_db;


CREATE TABLE student_course (
    student_id INT,
    student_name VARCHAR(100),
    course_name VARCHAR(100),
    trainer_name VARCHAR(100),
    trainer_phone VARCHAR(15),
    PRIMARY KEY (student_id, course_name)
);

INSERT INTO student_course VALUES
(1, 'Arun', 'Java', 'Kumar', '9876543210'),
(1, 'Arun', 'Python', 'Ravi', '9876543211'),
(2, 'Bala', 'Java', 'Kumar', '9876543210'),
(3, 'Dinesh', 'React', 'Suresh', '9876543212'),
(4, 'Ajay', 'Python', 'Ravi', '9876543211');


CREATE TABLE stu (
    stu_id INT PRIMARY KEY,
    stu_name VARCHAR(100)
);

INSERT INTO stu VALUES
(1, 'Arun'),
(2, 'Bala'),
(3, 'Dinesh'),
(4, 'Ajay');


CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100),
    trainer_name VARCHAR(100),
    trainer_phone VARCHAR(15)
);

INSERT INTO courses (course_name, trainer_name, trainer_phone) VALUES
('Java', 'Kumar', '9876543210'),
('Python', 'Ravi', '9876543211'),
('React', 'Suresh', '9876543212');


CREATE TABLE stu_courses (
    stu_id INT,
    course_id INT,
    PRIMARY KEY (stu_id, course_id),
    FOREIGN KEY (stu_id) REFERENCES stu(stu_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

INSERT INTO student_courses VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 3),
(4, 2);

CREATE TABLE trainers (
    trainer_id INT PRIMARY KEY AUTO_INCREMENT,
    trainer_name VARCHAR(100),
    trainer_phone VARCHAR(15)
);

INSERT INTO trainers (trainer_name, trainer_phone) VALUES
('Kumar', '9876543210'),
('Ravi', '9876543211'),
('Suresh', '9876543212');


CREATE TABLE courses_3nf (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100),
    trainer_id INT,
    FOREIGN KEY (trainer_id) REFERENCES trainers(trainer_id)
);

INSERT INTO courses_3nf VALUES
(1, 'Java', 1),
(2, 'Python', 2),
(3, 'React', 3);


SELECT 
    s.stu_name,
    c.course_name,
    t.trainer_name
FROM stu s
JOIN stu_courses sc ON s.stu_id = sc.stu_id
JOIN courses_3nf c ON sc.course_id = c.course_id
JOIN trainers t ON c.trainer_id = t.trainer_id;




-- task2

CREATE DATABASE company_db;
USE company_db;

CREATE TABLE employee_department (
    employee_id INT,
    employee_name VARCHAR(100),
    department_id INT,
    department_name VARCHAR(100),
    manager_name VARCHAR(100),
    department_location VARCHAR(100),
    PRIMARY KEY (employee_id, department_id)
);

INSERT INTO employee_department VALUES
(101, 'Arun', 10, 'IT', 'Kumar', 'Chennai'),
(102, 'Bala', 10, 'IT', 'Kumar', 'Chennai'),
(103, 'Dinesh', 20, 'HR', 'Ravi', 'Coimbatore'),
(104, 'Ajay', 20, 'HR', 'Ravi', 'Coimbatore'),
(105, 'Suresh', 30, 'Finance', 'Ramesh', 'Bangalore');

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    department_id INT,
    department_name VARCHAR(100),
    manager_name VARCHAR(100),
    department_location VARCHAR(100)
);

INSERT INTO employees VALUES
(101, 'Arun', 10, 'IT', 'Kumar', 'Chennai'),
(102, 'Bala', 10, 'IT', 'Kumar', 'Chennai'),
(103, 'Dinesh', 20, 'HR', 'Ravi', 'Coimbatore'),
(104, 'Ajay', 20, 'HR', 'Ravi', 'Coimbatore'),
(105, 'Suresh', 30, 'Finance', 'Ramesh', 'Bangalore');


CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100),
    manager_name VARCHAR(100),
    department_location VARCHAR(100)
);

INSERT INTO departments VALUES
(10, 'IT', 'Kumar', 'Chennai'),
(20, 'HR', 'Ravi', 'Coimbatore'),
(30, 'Finance', 'Ramesh', 'Bangalore');

CREATE TABLE employees_3nf (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
INSERT INTO employees_3nf VALUES
(101, 'Arun', 10),
(102, 'Bala', 10),
(103, 'Dinesh', 20),
(104, 'Ajay', 20),
(105, 'Suresh', 30);

SELECT 
    e.employee_name,
    d.department_name,
    d.manager_name,
    d.department_location
FROM employees_3nf e
JOIN departments d
ON e.department_id = d.department_id;