// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/generateMarkdown');


const questions =[
    {
        type:'input',
        name:'name',
        message: 'Hi! Welcome to the README generator. What is your name?'
    },
    {
        type:'input',
        name:'title',
        message: "What is the title of your project?"
    },
    {
        type:'input',
        name:'description',
        message: "Write a short description for why you are creating this project:"
    },
    {
        type:'input',
        name:'install',
        message: "How will your application be installed?",
        default: "npm install"
    },
    {
        type:'input',
        name:'usage',
        message: "Please list any additional instructions required for this project:"
    },
    {
        type:'input',
        name:'contributing',
        message: "Please list any contribution guidelines for others to participate in your project:"
    },
    {
        type:'input',
        name:'test',
        message: "To test the app, please enter the following:",
        default: "npm test"
    },
    {
        type:'input',
        name:'github',
        message: "Please enter your github username:"
    },
    {
        type:'input',
        name:'email',
        message: "Please enter the email address you would like to use for this project:"
    },
    {
        type:'checkbox',
        name:'license',
        message: "Please select any open source licenses for this project",
        choices: ["MIT License", "license 2", "license 3", "license 4", "none"]
    },
]   


// TODO: Create a function to write README file
function writeToFile(readMe, data) {
    inquirer.prompt(questions)
    .then(generateMarkdown(readMe, data),
    fs.writeFile("./assets/renderREADME.md", readMe, (err) =>
    err ? console.err(err) : console.log("Success! Creating README file.")));
};


// TODO: Create a function to initialize app
function init() {

   writeToFile();
}

// Function call to initialize app
init();
