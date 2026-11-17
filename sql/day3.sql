create database hospital_db;
use hospital_db;
create table department(
department_id int primary key auto_increment,
department_name varchar(50) not null,
location varchar(70));


create table staff(
staff_id int primary key auto_increment,
staff_name varchar(100) not null,
designation varchar(50),
salary decimal(10,2),
phone varchar(15),
department_id int,
foreign key(department_id)
references department (department_id)

);


CREATE TABLE diseases (
    disease_id INT PRIMARY KEY AUTO_INCREMENT,
    disease_name VARCHAR(100) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE patient_disease (
    patient_disease_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    disease_id INT,
    staff_id INT,
    diagnosis_date DATE,
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    FOREIGN KEY (disease_id) REFERENCES diseases(disease_id),
    FOREIGN KEY (staff_id) REFERENCES staff(staff_id)
);

CREATE TABLE payment (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_id INT,
    amount DECIMAL(10,2) NOT NULL,
    payment_date DATE,
    payment_method VARCHAR(50),
    payment_status VARCHAR(30),
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id)
);

