INSERT INTO department(name)
VALUES  ("Human Resources"),
        ("Underwriting"),
        ("Processing"),
        ("Claims");


INSERT INTO role(title, salary, department_id)
VALUES  ("HR specialist", 70000, 1),
        ("underwriter", 50000, 2),
        ("processor", 35000, 3),
        ("adjuster", 60000, 4);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES  ("Mary", "Smith", 1, null),
        ("Tom", "Jenkins", 2, 1),
        ("Kate", "Eagles", 3, 1), 
        ("Megan", "Penney", 4, 1);