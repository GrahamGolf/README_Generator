require("dotenv").config();
var inquirer = require("inquirer");
const api = require("./utils/api.js");
var fs = require("fs");


const questions = [
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is the title of your repository?",
      name: "title"
    },
    {
      type: "input",
      message: "Provide a description of this repository",
      name: "description"
    },
    {
      type: "input",
      message: "Please provide a table of contents",
      name: "tableOfContents"
    },
    {
      type: "input",
      message: "Provide installation instructions",
      name: "installation"
    },
    {
      type: "input",
      message: "Provide usage information",
      name: "usage"
    },
    {
      type: "input",
      message: "Provide license information",
      name: "license"
    },
    {
      type: "input",
      message: "Provide contributors information",
      name: "contributing"
    },
    {
      type: "input",
      message: "Provide any testing information",
      name: "test"
    },
  ];


function writeToFile(data) {
    fs.writeFile("README.md", data, function(err) {

    if (err) {
    return console.log(err);
  }

});

}

function init() {
    inquirer
      .prompt(questions)
      .then(async function(response) {
            console.log(response)
            let apiResponse = await api.getUser(response.username)
            const email = apiResponse.data.email;
            const image = apiResponse.data.avatar_url;
            const content = 
            `Hey the title is ${response.title}
            ![user profile pic](${image})
            ${email}
Description:${response.description}
            ${response.tableOfContents}
            ${response.installation}
            ${response.license}
            ${response.usage}
            ${response.contributing}
            ${response.test}        
`
            writeToFile(content)
      });
}

init();
