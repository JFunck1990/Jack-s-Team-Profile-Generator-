const inquire = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const questions = require('./questions');
const temp = require('./templates/temp');

console.log("This is temp:" + temp);

const teamArr = [];


function qStart () {
    console.log("Welcome to the Team Profile Generator! Please input for the following questions");

    inquire.prompt(questions.questionsStart).then(data => {

    const myTeamName = data.teamname;
 
    console.log("Your team name is: " + myTeamName);
    
    teamArr.push(myTeamName);

     manStart();

});


}

function manStart () {
    console.log("Welcome to the Team Profile Generator! Please input for the following questions");

    console.log("You are now in Manager questions");

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

function engineerStart (){
    console.log("You are now in Engineer questions");
    inquire.prompt(questions.engineerQuest).then(data =>{
        const newEng = new Engineer (data.name, data.id, data.email, data.github);
     
teamArr.push(newEng);
        newMember();
    });
}

/*function outputData(){
    //console.log("Inside output");
    //console.log("this should be the title: " + teamArr[0]);
const finalHtml = temp.renderHtml();

fs.writeFile('./output/team.html', finalHtml);

}*/
function newMember () {
inquire.prompt(questions.newMemberQ).then(function(res) {
if(res.add === "Engineer"){
    engineerStart();
}

if(res.add === "Intern"){
    internStart();
}

if(res.add === "No"){
    //outputData();
    
const finalHtml = temp.renderHtml(team);

fs.writeFileSync('./output/team.html', finalHtml);
}
});

}

qStart();
















