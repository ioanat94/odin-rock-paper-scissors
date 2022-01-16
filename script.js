function computerPlay() {
    let randomChoice = Math.floor((Math.random() * 3) + 1);
    let computerSelection;
    
    switch (randomChoice) {
        case 1: 
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
    }

    return computerSelection;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let finalResult;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        const computerSelection = computerPlay();

        if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
            if (playerSelection === computerSelection) {
                console.log("It's a tie!");
            } else if (playerSelection == "rock" && computerSelection == "paper") {
                console.log("You Lose! Paper beats Rock.");
                computerScore++;
            } else if (playerSelection == "rock" && computerSelection == "scissors") {
                console.log("You Win! Rock beats Scissors.");
                playerScore++;
            } else if (playerSelection == "paper" && computerSelection == "scissors") {
                console.log("You Lose! Scissors beats Paper.");
                computerScore++;
            } else if (playerSelection == "paper" && computerSelection == "rock") {
                console.log("You Win! Paper beats Rock.");
                playerScore++;
            } else if (playerSelection == "scissors" && computerSelection == "rock") {
                console.log("You Lose! Rock beats Scissors.");
                computerScore++;
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                console.log("You Win! Scissors beats Paper.");
                playerScore++;
            }
        } else {
            console.log("Invalid input. Please try again");
        }
    }

    if (playerScore == computerScore) {
        finalResult = "It's a tie!";
    } else if (playerScore > computerScore) {
        finalResult = "Congratulations! You Win!"
    } else {
        finalResult = "Too Bad! You Lose!";
    }

    return finalResult;
}

console.log(game());