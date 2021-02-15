// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = require('./assets/generateMarkdown');

const questions =[
    {
        type:'input',
        name:'title',
        message: "What is the name of your project?"
    },
    {
        type:'input',
        name:'description',
        message: "Write a short description for why you are creating this project"
    },
    {
        type:'input',
        name:'install',
        message: "How will your application be installed?"
    },
    {
        type:'input',
        name:'usage',
        message: "input questions for usage here"
    },
    {
        type:'input',
        name:'contribution',
        message: "contribution guidelines here"
    },
    {
        type:'input',
        name:'test',
        message: "how do you test the application"
    },
    {
        type:'input',
        name:'github',
        message: "What is your github username?"
    },
    {
        type:'input',
        name:'email',
        message: "Please enter email address"
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
* [Contributing](#contribution)
* [Tests](#tests)
* [Questions](#questions)


## Description

${data.description}

Your description of the project is displayed above.  Let the reader know the purpose and motivation for why you are creating this project.  It is also helpful to include a problem you are trying to solve and/or any learnings

## Installation

    ${data.install}

## Usage

${data.usage}

## Contribution

${data.contribution}

## Tests

Test Instructions

    ${data.test}


## License

${data.license}

## Questions

To contact the author of this repo-

Github: @${data.github}

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
