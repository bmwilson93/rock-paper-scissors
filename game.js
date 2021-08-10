// Rock Paper Scissors

// initialize scores
let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

function computerPlay () {
    let rand = Math.floor(Math.random() * 3); //generate int 0, 1, or 2
    
    // check the rand and return a String
    if (rand === 0) {
        return "rock"
    }
    else if (rand === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playRound (playerSelection, computerSelection) {
    // convert the playerSelection to all lowercase
    playerSelection = playerSelection.toLowerCase();
    
    let winner = "none";

    if (playerSelection === computerSelection) { // Draw
        winner = "neither";
        displayRound("It's a Draw!", playerSelection, computerSelection);
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "paper") {
                    winner = "computer";
                    displayRound("You lose. Paper beats Rock.",
                        playerSelection, computerSelection);
                    break;
                }
                else { // Scissors
                    winner = "player";
                    displayRound("You win! Rock beats Scissors.",
                        playerSelection, computerSelection);
                    break;
                }
            case "paper":
                if (computerSelection === "rock") {
                    winner = "player";
                    displayRound("You win! Paper beats Rock.",
                        playerSelection, computerSelection);
                    break;
                }
                else { // Scissors
                    winner = "computer";
                    displayRound("You lose. Scissors beats Paper.",
                        playerSelection, computerSelection);
                    break;
                }
            case "scissors":
                if (computerSelection === "rock") {
                    winner = "computer";
                    displayRound("You lose. Rock beats Scissors.",
                        playerSelection, computerSelection);
                    break;
                }
                else { // Paper
                    winner = "player";
                    displayRound("You win! Scissors beats Paper.",
                        playerSelection, computerSelection);
                    break;
                }
            default: // Error with player choice
                console.log("It was a draw, or there was a problem.")
        }
    }
    
    // round winner is set, call the checkGame function
    checkGame(winner);
}

function newGame() {
    // reset the scores to 0
    playerScore = 0;
    computerScore = 0;

    // default the displays
    roundMessage.textContent = "The results of the round will appear here.";
    playerChoice.textContent = "None";
    computerChoice.textContent = "None";

    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
}

function checkGame(winner) {
    // update the score
    switch(winner) {
        case "computer":
            computerScore += 1;
            break
        case "player":
            playerScore += 1;
            break
        default:
            console.log("no winner");
    }

    // display the updated score to the player
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    // check for score of 5 for game over
    if (computerScore === 5) {
        // game over, player loses
        btnContainer.classList.add('invisible');
        newGameBtn.classList.remove('invisible');
        alert("The game is over. You lose. :( ");
    } else if (playerScore === 5) {
        // game over, player wins
        btnContainer.classList.add('invisible');
        newGameBtn.classList.remove('invisible');
        alert("The game is over. You win! :) ");
    }
}

// store the round-message from index.html
const roundMessage = document.querySelector('.round-message');
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');

// Displays the results of the round
function displayRound(message, playChoice, comChoice) {
    playerChoice.textContent = playChoice;
    computerChoice.textContent = comChoice;
    roundMessage.textContent = message;
}

// Event listeners
const buttons = document.querySelectorAll('.play-buttons button');
const newGameBtn = document.querySelector('#new-game-button')
const btnContainer = document.querySelector('.play-buttons');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent, computerPlay()); // passes the context of the button text as the selection
    })
});

newGameBtn.addEventListener('click', function () {
    newGameBtn.classList.add("invisible");
    btnContainer.classList.remove("invisible");
    newGame()
});