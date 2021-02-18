// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    let badge = "![license badge](https://img.shields.io/badge/License-"

    if (license === "Apache License 2.0") {

        badge = badge+"Apache%20License%202.0-green.svg)";

    } else if (license === "GNU GPLv3"){

        badge = badge+"GNU%20GPLv3-blue.svg)";

    } else if (license === "MIT License"){
        
        badge = badge+"MIT-yellow.svg)";

    } else if (license === "ISC License"){
        
        badge = badge+"ISC-orange.svg)";

    } else {
        
        return "";
    }

    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
        let link;
    if (license === "Apache License 2.0") {

     link = "(https://choosealicense.com/licenses/mit/)"

    } else if (license === "GNU GPLv3"){



    } else if (license === "MIT License"){
        


    } else if (license === "ISC License"){
        


    } else {
        
        return "";
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const license = data.license;
    renderLicenseBadge(license);
    renderLicenseLink(license);


    const readMe = 
 `# ${data.title}

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
  
  This section covers contribution guidelines for others to participate in your project.  Additional information can be found at [contributing convenant](https://www.contributor-covenant.org/)
  
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
  
  This repo was created by **${data.name}**.  If you have any additional questions, I can be reached on
  
  Github: @${data.github}
  
  -or-
  
  Email: ${data.email}
  
  
  

`;
return readMe;
}

module.exports = generateMarkdown;
