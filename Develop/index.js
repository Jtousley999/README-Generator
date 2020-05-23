const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const path = require("path");

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "url",
    message: "the URL to your project?",
  },
  {
    type: "input",
    name: "project",
    message: "What is your project's name?",
  },

  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "install",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
  },
  {
    type: "input",
    name: "using",
    message: "What should the user know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What should the user know about contributing to the repo?",
  },
];

inquirer.prompt(questions).then(function (data) {
  const content = JSON.stringify(data, null, 4);

  fs.writeFile("README.md", generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
});
