console.log("Hello World");

function getComputerChoice() {
    let x = Math.round(Math.random() * (3-1) + 1);
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
        outcome = "Rock beats scissors! You win!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        outcome = "Paper beats rock! You lose!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        outcome = "Scissors beats paper! You lose!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        outcome = "Paper beats rock! You win!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        outcome = "Scissors beats paper! You win!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        outcome = "Rock beats scissors! You lose!";
    }
    else {
        outcome = "It's a tie"
    }
    return outcome;
  }

  function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    let outcome;

    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt("Enter your pick for RPS").toLowerCase();
        let computerSelection = getComputerChoice();
        outcome = playRound(playerSelection, computerSelection);
        console.log(outcome);
        if (outcome.match(/win/g) == "win") {
            playerWins += 1;
        }
        else if (outcome.match(/lose/g) == "lose") {
            computerWins += 1;
        }
        else {
            index--;
        }

        if (computerWins == 3 || playerWins == 3) {
            break;
        }
    }
    if (playerWins > computerWins) {
        console.log("You've won the game " + playerWins + " to " + computerWins)
    }
    else {
        console.log("You've lost the game " + computerWins + " to " + playerWins)
    }
  }
  

  playGame();