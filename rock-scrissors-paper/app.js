
let userChosen;
let computerChosen;
var result = results();
const displayResult = document.getElementById("result");
const computerChoice = document.getElementById("computer-choice");
const randomNumber = Math.trunc(Math.random() * 3);
const userchoice = document.getElementById("user-choice");
const possibleChoices = document.querySelectorAll(".choices");

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChosen = e.target.id;
    generateComputerChoice();
    results();
    console.log(randomNumber);
    userchoice.innerHTML = userChosen;
    computerChoice.innerHTML = computerChosen;
    displayResult.innerHTML = result;
  })
);

function generateComputerChoice() {
  
 
  
  if (randomNumber === 0) {
    return (computerChosen = "rock");
  } else if (randomNumber === 1) {
    return (computerChosen = "paper");
  } else if (randomNumber === 2) {
    return (computerChosen = "scissors");
  }
  

}

function results() {
  if (computerChosen === userChosen) {
    return (result = "It's a Tie");
  } else if (computerChosen === "rock" && userChosen === "paper") {
    return (result = "you win");
  } else if (computerChosen === "rock" && userChosen === "scissors") {
    return (result = "you lost");
  } else if (computerChosen === "paper" && userChosen === "rock") {
    return (result = "you lost");
  } else if (computerChosen === "paper" && userChosen === "scissors") {
    return (result = "you win");
  } else if (computerChosen === "scissors" && userChosen === "rock") {
    return (result = "you win");
  } else if (computerChosen === "scissors" && userChosen === "rock") {
    return (result = "you win");
  }
}
