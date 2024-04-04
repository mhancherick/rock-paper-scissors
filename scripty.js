console.log("Hello World");

let playerWins = 0;
let computerWins = 0;
let roundOutcome;

const outcomeOutput = document.querySelector(".roundOutcome");
const pWins = document.querySelector(".pWins");
const cWins = document.querySelector(".cWins");
const finalResult = document.querySelector(".finalResult");

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (x == 1) {
        computerChoice = "rock";
    }
    else if (x == 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let outcome;
    if (playerSelection == "rock" && computerSelection == "scissors") {
        outcome = "win";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        outcome = "lose";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        outcome = "lose";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        outcome = "win";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        outcome = "win";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        outcome = "lose";
    }
    else {
        outcome = "It's a tie"
    }
    return outcome;
  }

  const rockButton = document.querySelector(".rockButton");
  const paperButton = document.querySelector(".paperButton");
  const scissorsButton = document.querySelector(".scissorsButton");

    rockButton.addEventListener("click", () => {

        let tempOutcome = playRound("rock", getComputerChoice());

        if (tempOutcome == "win") {
            outcomeOutput.textContent = "Rock beats Scissors! You win!";
            playerWins++;
            pWins.textContent = "Your wins: " + playerWins;
        }
        else if (tempOutcome == "lose") {
            outcomeOutput.textContent = "Paper beats Rock! You lose!";
            computerWins++;
            cWins.textContent = "Computer wins: " + computerWins;
        }
        else {
            outcomeOutput.textContent = "You both chose Rock! It's a Tie!";
        }
        if (playerWins == 5) {
            finalResult.textContent = "You got to 5 wins! You've won the game! ☺";
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
        else if(computerWins == 5) {
            finalResult.textContent = "The computer got to 5 wins! You've lost the game! ☹";
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }

  });
  paperButton.addEventListener("click", () => {

    let tempOutcome = playRound("paper", getComputerChoice());

    if (tempOutcome == "win") {
        outcomeOutput.textContent = "Paper beats Rock! You win!";
        playerWins++;
        pWins.textContent = "Your wins: " + playerWins;
    }
    else if (tempOutcome == "lose") {
        outcomeOutput.textContent = "Scissors beats Paper! You lose!";
        computerWins++;
        cWins.textContent = "Computer wins: " + computerWins;
    }
    else {
        outcomeOutput.textContent = "You both chose Paper! It's a Tie!";
    }
    if (playerWins == 5) {
        finalResult.textContent = "You got to 5 wins! You've won the game! ☺";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
    else if(computerWins == 5) {
        finalResult.textContent = "The computer got to 5 wins! You've lost the game! ☹";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }

    

});
scissorsButton.addEventListener("click", () => {

    let tempOutcome = playRound("scissors", getComputerChoice());

    if (tempOutcome == "win") {
        outcomeOutput.textContent = "Scissors beats Paper! You win!";
        playerWins++;
        pWins.textContent = "Your wins: " + playerWins;
    }
    else if (tempOutcome == "lose") {
        outcomeOutput.textContent = "Rock beats Scissors! You lose!";
        computerWins++;
        cWins.textContent = "Computer wins: " + computerWins;
    }
    else {
        outcomeOutput.textContent = "You both chose Rock! It's a Tie!";
    }
    if (playerWins == 5) {
        finalResult.textContent = "You got to 5 wins! You've won the game! ☺";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
    else if(computerWins == 5) {
        finalResult.textContent = "The computer got to 5 wins! You've lost the game! ☹";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }


});