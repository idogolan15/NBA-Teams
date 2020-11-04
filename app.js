
const table = document.getElementById('tTable');
let flag = false;

// Get Teams 
async function getTeams() {
  await fetch('https://api.sportsdata.io/v3/nba/scores/json/teams?key=4a3c1ad9e42b4a3b892aa67ac688860b')
    .then((res) => res.json())
    .then((data) => {
      let output = `
        <thead>
          <tr style="padding: 15px 50px;">
            <th scope="col">Logo</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Division</th>
          </tr>
        </thead>
        <tbody>
      `;
      data.forEach(function(team) {
        output += `
        <tr id="teamRow" style="background:#${team.SecondaryColor}; color:#${team.PrimaryColor}; padding-left:50px; padding-right:50px;">
          <th scope="row"><img src="${team.WikipediaLogoUrl}"></th>
          <td>${team.Name}</td>
          <td>${team.City}</td>
          <td>${team.Division}</td>
        </tr>
        `;
      })
      flag = true;
      output+= `</tbody>`
      tTable.innerHTML = output;
})
}

getTeams();






