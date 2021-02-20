// team
const createTeam = (team) => {
  // manager
    const createManager = (manager) => {
      return `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">Manager<br /><br />${manager.name}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${manager.id}</li>
                <li class="list-group-item">Email Address:<a href="mailto">${manager.email}</a></li>
                <li class="list-group-item">Office Number:${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `
    };
  // engineers
    const createEngineer = (engineer) => {
      return `<div class="col-6">
          <div class="card mx-auto mb-3" style="width: 18rem">
              <h5 class="card-header">${engineer.name}<br /><br />Engineer</h5>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">${engineer.id}</li>
                  <li class="list-group-item">Email Address:<a href="mailto">${engineer.email}</a></li>
                  <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
              </ul>
          </div>
      </div>
      `
    };

  // interns
    const createIntern = (intern) => {
      return `<div class="col-6">
          <div class="card mx-auto mb-3" style="width: 18rem">
              <h5 class="card-header">${intern.name}<br /><br />Intern</h5>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">${intern.id}</li>
                  <li class="list-group-item"><a href ="mailto">${intern.email}</a></li>
                  <li class="list-group-item">${intern.school}</li>
              </ul>
          </div>
      </div>
      `
    };

    let html ="";
    for (let i = 1; i < team.length; i++) {
      const employee = team[i];
      if (employee.getRole() === "Manager") {
        html += createManager(employee);
      } else if (employee.getRole() === "Engineer") {
        html += createEngineer(employee);
      } else {
        html += createIntern(employee);
      }

    }
  return html;
  }
  // page
  const renderHtml = (team) => {
    return `<!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${team[0]}</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
  </head>

  <body>
      <nav class="navbar navbar-dark bg-dark mb-5">
          <span class="navbar-brand mb-0 h1 w-100 text-center">${team[0]}</span>
      </nav>
      <div class="container">
          <div class="row">
            ${createTeam(team)}
          </div>
      </div>

      </body>

      </html>
  `
  };

  module.exports.renderHtml = renderHtml;







