const inquire = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./questions');

const teamArr = [];
const teamN = "";

function qStart () {
    console.log("Wellcome to the Team Profile Generator! Please input for the following questions")
inquire.prompt(questions.questionsStart).then(data => {
const myTeamName = data.teamname;
 //teamN = data.teamname;
    console.log("Your team name is: " + myTeamName);
    

     manStart();

});


}

function manStart () {
    console.log("You are now in Manager questions")
 inquire.prompt(questions.managerQuest).then((res) => {
const newManager = new Manager (res.name, res.id, res.email, res.officeNumber);
     
teamArr.push(newManager);
newMember();
   });
}


function internStart () {
    console.log("You are now in Intern questions");
    inquire.prompt(questions.internQuest).then(data =>{
        const newIntern = new Intern (data.name, data.id, data.email, data.school);
     
teamArr.push(newIntern);
        newMember();
      
    });
}

function engeneerStart (){
    console.log("You are now in Engineer questions");
    inquire.prompt(questions.engineerQuest).then(data =>{
        const newEng = new Engineer (data.name, data.id, data.email, data.github);
     
teamArr.push(newEng);
        newMember();
    });
}

function outputData(){
    console.log("Inside output");
}

function newMember () {
inquire.prompt(questions.newMemberQ).then(function(res) {
if(res.add === "Engineer"){
engeneerStart();
}

if(res.add === "Intern"){
    internStart();
}

if(res.add === "No"){
    outputData();
}
});

}
qStart();


 

//const TeamNameCard= `<nav class="navbar navbar-dark bg-dark mb-5">
 //<span class="navbar-brand mb-0 h1 w-100 text-center">Team ${myTeamName}</span>
//</nav>`;







/*fs.appendFileSync('sampleREADME.md', htmlGen);
});*/











