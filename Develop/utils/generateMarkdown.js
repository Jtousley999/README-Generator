function generateMarkdown(data) {
  let licenseBadge;

  if (data.license === "MIT") {
    licenseBadge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (data.license === "APACHE 2.0") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else if (data.license === "GPL 3.0") {
    licenseBadge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (data.license === "BSD 3") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
  } else {
    licenseBadge = "";
  }
  return `# ${data.project}
${licenseBadge}(${data.url})\n
## Description\n
${data.description}\n
## Table of Contents \n
* [Installation](#installation)\n
* [Usage](#usage)\n
* [License](#license)\n
* [Contributing](#contributing)\n
* [Tests](#tests)\n
* [Questions](#questions)\n
## Installation \n
To install necessary dependencies, run the following command:\n
***
${data.install}
*** \n
## Usage \n
${data.using}\n
## License \n
${data.license}\n
## Contributing \n
${data.contributing}\n
## Tests\n
To run tests use the following command: \n
***
${data.tests}
*** \n
## Direct any questions regarding this project to: ${data.email}.








`;
}

module.exports = generateMarkdown;
