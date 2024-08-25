const buttons = document.querySelectorAll("button");

const resultEl = document.querySelector("#result");

const finalResultEl = document.querySelector(".final-result");

const playerScoreEl = document.querySelector("#human-score");

const computerScoreEl = document.querySelector("#computer-score");

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5){
        finalResultEl.textContent = "";
        const result = playRound(button.id, getComputerChoice());
        resultEl.textContent = result;
        checkFinalResult();
    }
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    playerScoreEl.textContent = humanScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function checkFinalResult(){
    if (humanScore === 5) {
        finalResultEl.textContent = "You win the game!";
        humanScore = 0;
        computerScore = 0;
        resultEl.textContent = "";
        playerScoreEl.textContent = humanScore;
        computerScoreEl.textContent = computerScore;
      } else if (computerScore === 5) {
        finalResultEl.textContent = "Computer wins the game!";
        humanScore = 0;
        computerScore = 0;
        resultEl.textContent = "";
        playerScoreEl.textContent = humanScore;
        computerScoreEl.textContent = computerScore;
      }
}