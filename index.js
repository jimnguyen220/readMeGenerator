// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "",
        message: "",
    },
    {
        type: "input",
        name: "",
        message: "",
    },
    
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();


fs.writeFile('generateREADME.md', writeToFile, (err) =>
 err ? console.log(err) : console.log('Creating README.md')
 );