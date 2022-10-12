USE employees_db;

INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"), 
       ("Finance"), 
       ("Legal");

INSERT INTO role (title, salary, department_id) 
VALUES  ("Sales Lead", 100000, 1),
        ("Salesperson", 80000, 1),
        ("Lead Engineer", 150000, 2),
        ("Software Engineer", 120000, 2),
        ("Account Manager", 160000, 3),
        ("Accountant", 125000, 3),
        ("Legal Team Lead", 250000, 4),
        ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Amy", "Doe", 1, null),
        ("Bivens", "McDonald", 2, 1),
        ("Lee", "Shun", 3, null),
        ("Marion", "Junior", 4, 3),
        ("Deanna", "Preston", 5, null),
        ("Deborah", "Brown", 6, 5),
        ("Sandra", "Lourd", 7, null),
        ("Megan", "Allen", 8, 7);