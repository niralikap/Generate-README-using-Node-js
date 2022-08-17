  class genRead {

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
    static renderLicenseBadge(license) {
      const badges = {
        MIT: '[![License: MIT](https://img.shields.io/github/license/mashape/apistatus)](https://opensource.org/licenses/MIT)',
        EPL: '[![License: EPL](https://img.shields.io/eclipse-marketplace/l/notepad4e?color=purple)](https://opensource.org/licenses/EPL-2.0)',
        Apache: '[![License: Apache](https://img.shields.io/aur/license/android-studio)](https://opensource.org/licenses/Apache-2.0)' 
      }
      return badges[license]
    }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
    static renderLicenseLink(license) {
      const licenseLinks = {
        MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
        EPL: '[EPL](https://choosealicense.com/licenses/agpl-3.0/)',
        Apache: '[Apache](https://choosealicense.com/licenses/apache-2.0/)'
      }
      return licenseLinks[license]
    }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
    static renderLicenseSection(license) {
      if(license){
        return `Licensed under the ${this.renderLicenseLink(license)} license`
      } else {
        return ''
      }
    }

    static renderGithubSection(github) {
      if(github){
        return `https://github.com/niralikap.`
      } else {
        return ''
      }
    }

    static renderEmailSection(email) {
      if(email){
        return `For additional questions, please reach out to me at 123-456-7890.`
      } else {
        return ''
      }
    }

// TODO: Create a function to generate markdown for README
  static generateMarkdown(data) {
  return `
# ${data.title}

${this.renderLicenseBadge(data.license)}

## Table of Contents
- [Project Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Test Cases](#tests)
- [Questions](#questions)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## License
${this.renderLicenseSection(data.license)}

## Test Cases
${data.tests}

## Questions
### The GitHub username is: ${data.github}
### The GitHub link is: ${this.renderGithubSection(data.github)}
### The email address is: ${data.email}
###
${this.renderEmailSection(data.email)}

`;
}
  }
module.exports = genRead;
