// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genRead = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

//const promptUser = () => {
//inquirer
//  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter the description of the project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please specify the installation instructions.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please specify the usage information.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide the contribution guidelines',
    },
    {
        type: 'list',
        message: 'Please select the license?',
        name: 'license',
        choices: ['MIT', 'EPL', 'Apache'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please list the test cases:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email address:',
    }
 // ])
]

;
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function writeToFileInit() {
    
    return inquirer.prompt(questions)
    .then((data) => {
        const input = genRead.generateMarkdown(data);
        fs.writeFile('README.md', input, function(err){
          if (err) {
            console.log('Could not save file', err)           
          } else {
            console.log('Success: new README.md file generated inside the current folder')
          }
        })
      })
      .catch((error) => {
          console.log(error)
      }) 
}

// Function call to initialize app
writeToFileInit()




