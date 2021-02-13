// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateMarkdown');

console.log()
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();


fs.writeFile('README.md', writeToFile, (err) =>
 err ? console.log(err) : console.log('Creating README.md')
 );