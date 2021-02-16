// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = require('./assets/generateMarkdown');

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
        message: "How will your application be installed?"
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
        message: "To test the app, please enter the following:"
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
        message: "Please select any licenses you will be using",
        choices: ["license 1", "license 2", "license 3", "license 4", "none"]
    },
]   


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions)
    .then((data) => {
    let readMe =

`
# ${data.title}

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


------------------------------------

## Description

${data.description}


------------------------------------

## Installation

To install this application, you will need to enter the following line of code into a Node.js session.  
    
    ${data.install}


------------------------------------

## Usage

This section describes any additional instructions required to use the app. 

    ${data.usage}


------------------------------------

## Contributing

This section covers contribution guidelines for others to participate in your project.

    ${data.contributing}


------------------------------------

## Tests

To test the app, please enter the following code

    ${data.test}


------------------------------------

## License

${data.license}


------------------------------------

## Questions

This repo was created by ${data.name}.  If you have any additional questions, I can be reached on

Github: @${data.github}

-or-

Email: ${data.email}


`;
        
    fs.writeFile("./assets/renderREADME.md", readMe, (err) =>
    err ? console.err(err) : console.log("Creating README.md"))
    });
};


// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
