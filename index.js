const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's Id number?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email address?"
    }
])