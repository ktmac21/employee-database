const express = require('express');
const cTable = require('console.table'); 
const inquirer = require('inquirer'); 

const app = express();

console.table([
    {

    }
])



const startPrompt =
    [
        {
            type: 'input',
            name: 'main',
            message: 'Please choose an option',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 
                        'add a role', 'add an employee', 'update an employee role']
                    }
    ]

const addDept = 
    [
        {
            type: 'input',
            name: 'add_dept',
            message: 'Please enter new department name',

        }
    ]

const add_role = 
    [
        {
            type: 'input',
            name: 'add_role_name',
            message: 'Please enter new role name',
        },

        {
            type: 'input',
            name: 'add_role_salary',
            message: 'Please enter the new role salary',

        },
    ]

const addEmploy = 
    [
        {
            type: 'input',
            name: 'add_first_name',
            message: 'Please enter employee first name',
        },

        {
            type: 'input',
            name: 'add_last_name',
            message: 'Please enter employee last name',

        },

        {
            type: 'input',
            name: 'add_employ_salary',
            message: 'Please enter employee salary',
        },

        {
            type: 'input',
            name: 'add_manager',
            message: 'Please enter employee manager',
        },

    ]

const updatePrompt = 
    [
        {
            type: 'input',
            name: 'update_prompt',
            message: 'Please select an employee to update',
            choices: ['existing database?'],
        }
    ]

const updateRole = 
    [
        {
            type: 'input',
            name: 'update_role',
            message: 'Please enter employee new role',
        },

        {
            type: 'input',
            name: 'update_salary',
            message: 'Please enter new salary',
        }
    ]

    function init() {
        inquirer.prompt(startPrompt)
            .then(function (data) {
                console.log(data)
                writeToFile("README.md", generateTables(data));
                console.log(data)
            })
    }
    
    // Function call to initialize app
    init();
    