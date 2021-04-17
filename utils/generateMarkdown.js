// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if('MIT' === license){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  }
  else if('The Unlicense' === license){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]"
  }
  else if ('ISC' === license){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]"
  }
  else if ('Apache 2.0' === license){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
  }
  else{
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if('MIT' === license){
    return "https://opensource.org/licenses/MIT";
  } else if ('The Unlicense' === license){
    return "http://unlicense.org/";
  } else if ('ISC' === license){ 
    return "https://opensource.org/licenses/ISC";
  } else if ('Apache 2.0' === license){
    return "https://opensource.org/licenses/Apache-2.0";
  } else { 
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return '## License';
  }
  else{
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  code found here: https://github.com/rickyonthephone/README-Generator-2
  
  ## Description
    ${data.description}
          
  ## Installation
    ${data.installation}
          
  ## Usage
    ${data.usage}
          
  ## Credits
    ${data.credits}
  
  ${renderLicenseSection(data.license)}
    ${renderLicenseBadge(data.license)}
    ${renderLicenseLink(data.license)}
          
  ## Tests
    ${data.tests}
          
  ## GitHub
    ${data.gitHub}
          
  ## Email        
    ${data.email}

`;}

module.exports = generateMarkdown;

//renderLicenseBadge(data.license)
