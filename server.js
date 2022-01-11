// const express = require('express');
const db = require('./db/connection');
// const apiRoutes = require('./routes/api');
const { getAll } = require('./routes/commonRoutes');
const { addDepartment } = require('./routes/departmentRoutes');
const { addRole } = require('./routes/roleRoutes');
const { addEmployee } = require('./routes/employeeRoutes');
const inquirer = require('inquirer');

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
});


const userInput = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all Departments', 
        'View all Roles', 
        'View all Employees', 
        'Add a Department', 
        'Add a Role', 
        'Add an Employee', 
        'Update an Employee'
      ]
    }
  ])
};

// user input - new department
const newDepartment = departmentData => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new Department?'
    }
  ])
  .then(departmentData => {
    return addDepartment(departmentData.name);
  })
};


// user input - new role
const newRole = roleData => {

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the new Role?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the Salary for this Role?'
    },
    {
      type: 'input',
      name: 'department',
      message: 'What Department it belongs to?'
    }
  ])
  .then(roleData => {
    return addRole(roleData.name, roleData.salary, roleData.department);
  })
};

// user input - new employee
const newEmployee = employeeData => {

  return inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'What is the First Name of the new Employee?'
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'What is the Last Name of the new Employee?'
    },
    {
      type: 'input',
      name: 'role',
      message: `What's the new Employee's Role ID?`
    },
    {
      type: 'input',
      name: 'manager',
      message: `Who's the new Employee's Manager ID?`
    }
  ])
  .then(employeeData => {
    return addEmployee(employeeData.firstName, employeeData.lastName, employeeData.role, employeeData.manager);
  })
};

userInput()
  .then(data => {
    if (data.action === 'View all Departments') {
      // return all Departments
      const table = 'department';
      getAll(table);
    } else if (data.action === 'View all Roles') {
      // return all Roles
      const table = 'role';
      getAll(table);
    } else if (data.action === 'View all Employees') {
      // return all Employees
      const table = 'employee';
      getAll(table);
    } else if (data.action === 'Add a Department') {
      // add a department
      newDepartment();
    } else if (data.action === 'Add a Role') {
      // add a Role
      newRole();
    } else if (data.action === 'Add an Employee') {
      // add an Employee
      newEmployee();
    } else if (data.action === 'Update an Employee') {
      // Update an Employee data
    }
  });