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

let buttons = document.querySelectorAll(".rps");

for (button of buttons) {
    button.addEventListener('click', function() {
        game(this.value);
    });
}

let playerScore = 0;
let computerScore = 0;
let computerChoice = document.getElementById("computer-choice");
let finalResult = document.getElementById("final-result");
let restart = document.getElementById("restart");

function game(playerSelection) {
    let results = document.getElementById("results");

    const computerSelection = computerPlay();
    computerChoice.textContent = `The computer chose ${computerSelection}.`;

    if (playerSelection === computerSelection) {
        results.textContent = "It's a tie!";
        results.style.color = "black";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        results.textContent = "You Lose! Paper beats Rock.";
        results.style.color = "red";
        computerScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        results.textContent = "You Win! Rock beats Scissors.";
        results.style.color = "green";
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        results.textContent = "You Lose! Scissors beats Paper.";
        results.style.color = "red";
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        results.textContent = "You Win! Paper beats Rock.";
        results.style.color = "green";
        playerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        results.textContent = "You Lose! Rock beats Scissors.";
        results.style.color = "red";
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        results.textContent = "You Win! Scissors beats Paper.";
        results.style.color = "green";
        playerScore++;
    }

    displayScore(playerScore, computerScore);

    if (playerScore == 5) {
        finalResult.textContent = "Congratulations! You Win!";
        finalResult.style.color = "green";
        endGame();
    } else if (computerScore == 5) {
        finalResult.textContent = "Too Bad! The Computer Wins!"
        finalResult.style.color = "red";
        endGame();
    }
}

function displayScore(playerScore, computerScore) {
    let currentPlayerScore = document.getElementById("current-player-score");
    let currentComputerScore = document.getElementById("current-computer-score");

    currentPlayerScore.textContent = `Your score is: ${playerScore}`
    currentComputerScore.textContent = `The computer's score is: ${computerScore}`;
}

function endGame() {
    for (button of buttons) {
        button.disabled = true;
    }

    restart.hidden = false;
    restart.addEventListener("click", restartGame);
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    displayScore(playerScore, computerScore);
    computerChoice.textContent = ``;
    finalResult.textContent = "";
    results.textContent = "";

    for (button of buttons) {
        button.disabled = false;
    }

    restart.hidden = true;
}