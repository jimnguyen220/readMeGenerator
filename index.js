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
        type:'list',
        name:'license',
        message: "Please select any open source licenses for this project",
        choices: ["Apache License 2.0", "GNU GPLv3", "MIT License", "ISC License", "None"]
    },]   


// TODO: Create a function to write README file
function writeToFile(readMe, license) {
        fs.writeFile("./assets/renderREADME.md", readMe, (err) =>
        err ? console.error(err) : console.log("Success! Creating README file."));
}
     


// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(data => { 
        generateMarkdown(data);        
        const readMe = generateMarkdown(data);
        writeToFile(readMe, data);
    })

};

// Function call to initialize app
init();
