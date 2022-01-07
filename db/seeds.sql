INSERT INTO department
    (name)
VALUES
    ('Automation'),
    ('Engineering'),
    ('Finance'),
    ('Customer Service'),
    ('Manufacturing'),
    ('Purchasing'),
    ('HR'),
    ('Marketing'),
    ('Sales'),
    ('IT');


INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Manager', 150000, 1),
    ('Manager', 150000, 2),
    ('Manager', 150000, 3),
    ('Manager', 150000, 4),
    ('Manager', 150000, 5),
    ('Manager', 150000, 6),
    ('Manager', 150000, 7),
    ('Manager', 150000, 8),
    ('Manager', 150000, 9),
    ('Manager', 150000, 10),
    ('Developer', 110000, 1),
    ('Engineer', 100000, 2),
    ('Accountant', 80000, 3),
    ('IT Specialist', 90000, 10),
    ('Story Teller', 110000, 8),
    ('Procurement Agent', 80000, 6);


INSERT INTO employee
    (first_name, last_name, role_id)
VALUES
    ('Alex', 'Glaze', 1),
    ('Dan', 'Mueller', 2),
    ('Johnny', 'Pane', 3),
    ('Jordan', 'Lewis', 4),
    ('Luigi', 'Campbell', 5),
    ('Matthew', 'Goad', 6),
    ('Rachael', 'Davis', 7),
    ('Clint', 'Eastwood', 8),
    ('Chuck', 'Norris', 9),
    ('Keanu', 'Reeves', 10);


INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Adair', 'Conlin', 11, 1),
    ('Alex', 'Wu', 12, 2),
    ('Andrew', 'McNeal', 11, 1),
    ('Bryan', 'Durushia', 13, 3),
    ('Cameron', 'Nelson', 14, 10),
    ('Edison', 'Simondet', 15, 7),
    ('Evan', 'Carlson', 16, 6);
