const inquire = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./questions');


function qStart () {
    console.log("Wellcome to the Team Profile Generator! Please input for the following questions")
inquire.prompt(questions.questionsStart).then(data => {
    

    manStart();
   
});


}

function manStart () {
    console.log("You are now in Manager questions")
 inquire.prompt(questions.managerQuest).then(data => {
 internStart();
   });

}


function internStart () {
    console.log("You are now in Intern questions");
    inquire.prompt(questions.internQuest).then(data =>{

        engeneerStart()

    });
}

function engeneerStart (){
    console.log("You are now in Engineer questions");
    inquire.prompt(questions.engineerQuest).then(data =>{
        newMember();
    });
}

function newMember () {
inquire.prompt(questions.newMemberQ);

}

qStart();











