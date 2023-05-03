const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "Cockroach";
  }
  if (randomNumber === 2) {
    computerChoice = "Foot";
  }
  if (randomNumber === 3) {
    computerChoice = "Nuclear Bomb";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!";
  }
  if (computerChoice === "Cockroach" && userChoice === "foot") {
    result = "You win!";
  }
  if (computerChoice === "Cockroach" && userChoice === "Nuclear Bomb") {
    result = "You lose!";
  }
  if (computerChoice === "Foot" && userChoice === "Cockroach") {
    result = "You lose!";
  }
  if (computerChoice === "Foot" && userChoice === "Nuclear Bomb") {
    result = "You win!";
  }
  if (computerChoice === "Nuclear Bomb" && userChoice === "Foot") {
    result = "You lose!";
  }
  if (computerChoice === "Nuclear Bomb" && userChoice === "Cockroach") {
    result = "You win!";
  }

  resultDisplay.innerHTML = result;
}
