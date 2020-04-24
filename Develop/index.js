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
        message: "What is the title",
        name: "title"
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
      .then(function(response) {
            console.log(response)
            api.getUser(response.username)
            const content = `Hey the title is ${response.title}
SECOND LINE`
            writeToFile(content)
      });
}

init();
