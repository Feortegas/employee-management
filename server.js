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
  console.log('Database connected.');
});


const userInput = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'action',
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
      addDepartment(data);
    } else if (data.action === 'Add a Role') {
      // add a Role
      addRole(data);
    } else if (data.action === 'Add an Employee') {
      // add an Employee
      addEmployee(data);
    } else if (data.action === 'Update an Employee') {
      // Update an Employee data
    }
  });