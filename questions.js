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
        message: "What is your name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your ID number?",
        name: "id"
      }

];

const internQuest = [
    {
        type: "input",
        message: "What is this member's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is this member's ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is this member's email address?",
        name: "email"
      },
      {
        type: "input",
        message: "Which school did this member go to?",
        name: "school"
      }
];

const engineerQuest = [
    {
        type: "input",
        message: "What is this member's name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is this member's ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is this member's email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is this member's GitHub username?",
        name: "github"
      }
];

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

    