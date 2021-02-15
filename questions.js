const questionsStart = [
    {
        type: 'input',
        name: 'teamname',
        message:'What is your teams name?',
      }
     
    ];
    // Manager Questions
const managerQuest = [
    {
        type: "input",
        message: "What is the Managers name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is Managers office number?",
        name: "officeNumber"
      },
      {
        type: "input",
        message: "What is Managers email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is Managers ID number?",
        name: "id"
      }

];
// interns questions
const internQuest = [
    {
        type: "input",
        message: "What is this Interns's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is this Interns's ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is this Intern's email address?",
        name: "email"
      },
      {
        type: "input",
        message: "Which school did this Intern go to?",
        name: "school"
      }
];
// engineere questions
const engineerQuest = [
    {
        type: "input",
        message: "What is this Engeneer's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is this Engeneer's ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is this Engeneer's email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is this Engeneer's GitHub username?",
        name: "github"
      }
];
//Asking if you would like to add another team member
const newMemberQ = [{
    type: "list",
    message: "Would you like to enter another team member?",
    name: "add",
    choices: ["yes", "no"]
}]

    module.exports ={
        questionsStart,
        managerQuest,
        internQuest,
        engineerQuest,
        newMemberQ
        
    };

    