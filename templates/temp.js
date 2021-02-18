
// team
const createTeam = (team) => {
    let html ="";
    team.forEach((employee) => {
      if (employee.getRole() === "Manager") {
        html += createManager(employee);
      } else if (employee.getRole() === "Engineer") {
        html += createEngineer(employee);
      } else {
        html += createIntern(employee);
      }
    });
  ​
    // manager
    const createManager = (manager) => {
      return `
      <div class="row"><div class="col-6">
<div class="card mx-auto mb-3" style="width: 18rem">
<h5 class="card-header">Manager<br /><br />${manager.name}</h5>
<ul class="list-group list-group-flush">
    <li class="list-group-item">${manager.id}</li>
    <li class="list-group-item">Email Address:${manager.email}</li>
    <li class="list-group-item">Office Number:${manager.officeNumber}</li>
</ul>
</div>
</div>
        `;
    };
  ​
    // engineers
    const createEngineer = (engineer) => {
      return `
      <div class="col-6">
<div class="card mx-auto mb-3" style="width: 18rem">
<h5 class="card-header">${engineer.name}<br /><br />Engineer</h5>
<ul class="list-group list-group-flush">
    <li class="list-group-item">${engineer.id}</li>
    <li class="list-group-item">Email Address:${engineer.email}</li>
    <li class="list-group-item">GitHub:${engineer.github}</li>
</ul>
</div>
</div>
        `;
    };
  ​
    // interns
    const createIntern = (intern) => {
      return `
      <div class="col-6">
      <div class="card mx-auto mb-3" style="width: 18rem">
      <h5 class="card-header">${intern.name}<br /><br />Intern</h5>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">${intern.id}</li>
          <li class="list-group-item">${intern.email}</li>
          <li class="list-group-item">${intern.school}</li>
      </ul>
      </div>
      </div> 
        `;
    };
  ​
    return html;
  };
  ​
  // page
  const renderHtml = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${teamArr[0]}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    </head>
    <body>
    <nav class="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center">${teamArr[0]}</span>
    </nav>
<div class="container"
${createTeam(team)}
</div>
    
</body>
</html>
    `;
  };
  ​
 
  module.exports = renderHtml;




/*const html = () => { return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${teamArr[0]}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    </head>
    <body>
    <nav class="navbar navbar-dark bg-dark mb-5">
        <span class="navbar-brand mb-0 h1 w-100 text-center">${teamArr[0]}</span>
    </nav>
<div class="container"

${function gen (){

}}

</div>
    
</body>
</html>`; }

const genman= (man) =>{ return `<div class="row"><div class="col-6">
<div class="card mx-auto mb-3" style="width: 18rem">
<h5 class="card-header">Manager<br /><br />${man.name}</h5>
<ul class="list-group list-group-flush">
    <li class="list-group-item">${man.id}</li>
    <li class="list-group-item">Email Address:${man.email}</li>
    <li class="list-group-item">Office Number:${man.officeNumber}</li>
</ul>
</div>
</div>`
 }




const genEngineer = (eng) => { return `<div class="col-6">
<div class="card mx-auto mb-3" style="width: 18rem">
<h5 class="card-header">Engineer Neam<br /><br />Engineer</h5>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: 2</li>
    <li class="list-group-item">Email Address: email@gmail.com</li>
    <li class="list-group-item">GitHub: TheGithubName</li>
</ul>
</div>
</div>`;}

const gernIntern =  (int) => { return `<div class="col-6">
<div class="card mx-auto mb-3" style="width: 18rem">
<h5 class="card-header">${int.name}<br /><br />Intern</h5>
<ul class="list-group list-group-flush">
    <li class="list-group-item">${int.id}</li>
    <li class="list-group-item">${int.email}</li>
    <li class="list-group-item">${int.school}</li>
</ul>
</div>
</div> 
`
}*/

//module.exports = html;



