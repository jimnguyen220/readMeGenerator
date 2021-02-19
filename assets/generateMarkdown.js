// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    let license = data.license;
    let badge = "[![license badge](https://img.shields.io/badge/License-"

    if (license === "Apache License 2.0") {

        badge = badge+"Apache%20License%202.0-green.svg)](https://choosealicense.com/licenses/apache-2.0/)";

    } else if (license === "GNU GPLv3"){

        badge = badge+"GNU%20GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)";

    } else if (license === "MIT License"){
        
        badge = badge+"MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)";

    } else if (license === "ISC License"){
        
        badge = badge+"ISC-orange.svg)](https://choosealicense.com/licenses/isc/)";

    } else if (license === "None"){
        badge = "";
        license = "";
    }


    const readMe = 
 `# ${data.title}

 ${badge}
    

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

 The license for this project is - click the button at the top of the README for a link to information about this license.  If you chose "None" for the license, there will be no button at the top.
  
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
