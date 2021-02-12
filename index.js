const inquire = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./questions');



const managerArr = [];
const engineereArr = [];
const InternArr = [];

inquire.prompt(questions.questionsStart).then(data => {
    

});



