// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = require('./assets/generateMarkdown');


inquirer.prompt([
    {
        type:'input',
        name:'title',
        message: "What is the name of your project?"
    },
    {
        type:'input',
        name:'github',
        message: "What is your github username?"
    },
    {
        type:'list',
        name:'license',
        message: "Please select any licenses you will be using",
        choices: ["license 1", "license 2", "license 3", "license 4", "none"]
    },
    
]).then((data) => {
let readMe = `
# ${data.title}

## Github username: ${data.github}

## Licenses
    * ${data.license}
`;

fs.writeFile("./assets/renderREADME.md", readMe, (err) =>
err ? console.err(err) : console.log("Creating README.md"))
});




// // TODO: Create an array of questions for user input
// const questions = inquirer.prompt([
//     {
//         type: "input",
//         name: "title",
//         message: "What is the name of your project?",
//     },
//     // {
//     //     type: "input",
//     //     name: "",
//     //     message: "",
//     // },
//     // {
//     //     type: "input",
//     //     name: "",
//     //     message: "",
//     // },
    
// ]).then((data) => {
//     writeToFile(fileName, data)
// });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     questions.then((data) =>{
// `
// # ${data.title}

// ## Description 

// This is where you would provide a description of your project.  

// You can update headings, similar to using header tags in html by using a '#' - 
// * An <h1> tag will be similar to using '#' followed by a space





// ## Table of Contents

// If your README is very long, add a table of contents to make it easy for users to find what they need.

// * [Installation](#installation)
// * [Usage](#usage)
// * [Credits](#credits)
// * [License](#license)


// ## Installation

// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


// ## Usage 

// Provide instructions and examples for use. Include screenshots as needed. 

// To add a screenshot, create an `` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

// ``
// ``


// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.


// ## License

// The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)


// ---

// 🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

// Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## Features

// If your project has a lot of features, consider adding a heading called "Features" and listing them there.

// ## Contributing

// If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

// ## Tests

// Go the extra mile and write tests for your application. Then provide examples on how to run them.

// ---

// © 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
// `;

// fs.writeFile('./assets/generateREADME.md', writeToFile, (err) =>
//  err ? console.log(err) : console.log('Creating README.md')
//  );
// });
// };


// // TODO: Create a function to initialize app
// function init() {

// }

// // Function call to initialize app
// init();

