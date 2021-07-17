let score = [0, 1];
let turn;

var team1 = {
  name: "Anguilla",
  total: 0,
  shoot: [],
};

var team2 = {
  name: "Armenia",
  total: 0,
  shoot: [],
};

window.onload = () => {
  selectTurn();
  updateButtonText();
  updateName();
};

let selectTurn = () => {
  turn = Math.round(Math.random()) + 1;
};

let updateButtonText = () => {
  var button = document.getElementById("button");

  var result = document.getElementById("final-result");
  result.style.visibility = "hidden";
  if (team1.shoot.length == 5 && team2.shoot.length == 5) {
    button.remove();
    result.style.visibility = "";
    result.textContent =
      team1.total === team2.total
        ? `Match Draw`
        : `${team1.total > team2.total ? team1.name : team2.name} Wins`;
  } else {
    button.textContent = `Shoot ${turn === 1 ? team1.name : team2.name}`;
  }
};

let updateName = () => {
  document.getElementById("team-1-name").textContent = team1.name;
  document.getElementById("team-2-name").textContent = team2.name;
};

var ButtonClick = () => {
  var shoot = score[Math.floor(Math.random() * score.length)];
  if (turn === 1) {
    team1.shoot.push(shoot);
    team1.total = calculateTotal(team1.shoot);
  } else {
    team2.shoot.push(shoot);
    team2.total = calculateTotal(team2.shoot);
  }
  changeTurn();
  updateButtonText();
  updateShoot();
};

var calculateTotal = (shoot) => {
  return shoot.reduce((a, b) => a + b, 0);
};

var updateShoot = () => {
  var teamOne = document.getElementById("team-1-round-shoot").children;
  var teamTwo = document.getElementById("team-2-round-shoot").children;
  team1.shoot.forEach((shoot, index) => {
    shoot === 1
      ? (teamOne[index].style.backgroundColor = "green")
      : (teamOne[index].style.backgroundColor = "red");
  });
  team2.shoot.forEach((shoot, index) => {
    shoot === 1
      ? (teamTwo[index].style.backgroundColor = "green")
      : (teamTwo[index].style.backgroundColor = "red");
  });
};

var changeTurn = () => {
  turn = turn === 1 ? 2 : 1;
};
