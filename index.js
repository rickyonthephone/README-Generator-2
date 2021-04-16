// Modules needed for application
const fs = require('fs');
const inquirer = require('inquirer');

//require generateMarkdown file to execute markdown creation
const generateMarkdown = require('./utils/generateMarkdown')



// Inquirer question array
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
},
    {
    type: 'input',
    message: 'Provide us with a short description of your project:',
    name: 'description'
},
    {
    type: 'input',
    message: 'What is required by the user to install your project? If there are multiple steps, please walk through it step by step.',
    name: 'installation'
},
    {
    type: 'input',
    message: 'What will your project be used for or what should the user expect from your project?',
    name: 'usage'
},
    {
    type: 'input',
    message: 'Who made contributions to your project? Please provide all collaborators, any third party attributions, and/or any tutorials.',
    name: 'credits'
},
    {
    type: 'list',
    message: 'What license is being used?',
    name: 'license',
    choices: ['MIT', 'The Unlicense', 'ISC', 'Apache 2.0', 'None']
},
    {
    type: 'input',
    message: 'Are any tests needed for your application? If so, please provide them here.',
    name: 'tests'
},
    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'gitHub'
},
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'
},
];


//function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
        console.log(err)
    });
}

// function to initialize app
function init() {
   inquirer.prompt(questions)
        .then(function (response) {
        console.log(response);
        const markdown = generateMarkdown(response);
        console.log(markdown)
        writeToFile('README.md', generateMarkdown(response));
    })
        .catch (function (err){
            console.log('Pass a string to writeToFile', err)
        })
}

// Function call to initialize app
init();
