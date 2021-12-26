// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils.generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please submit a description for your project."
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "Please submit a table of contents for your projects ReadMe."
    },
    {
        type: "input",
        name: "installation",
        message: "What type of installation procedure(s) are needed? If none type 'none')"    
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe what your project is used for."
    },
    {
        type: "list",
        name: "license",
        message: "Which license do you want to use?",
        choices: ["IBM", "MIT", "Mozilla"]
    },
    {
        type: "list",
        name: "openSource",
        message: "Is this project open source? Please select 'yes' or 'no'.",
        choices: ["Yes", "No"]
    },
    {
        type: "input",
        name: "contributing",
        message: "How are others allowed to contribute to this project?"
    },
    {
        type: "list",
        name: "testing",
        message: "Is testing available for your project. Please select 'yes' or 'no'.",
        choices: ["Yes", "No"]
    },
    {
        type: "input",
        name: "gitHubUserName",
        message: "Please enter your GitHub user name."
    },
    {
        type: "input",
        name: "gitHubLink",
        message: "Please enter the URL of your GitHub profile."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
