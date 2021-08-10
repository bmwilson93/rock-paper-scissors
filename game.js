// Rock Paper Scissors

// initialize scores
let playerScore = 0;
let computerScore = 0;

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
    playerSelection = playerSelection.toLowerCase()
    
    // test the playerSelection against the computerSelection
    let winner = "none";
    // same choice
    if (playerSelection === computerSelection) {
        winner = "neither"
        return "It's a Draw!"
    }
    
    // TODO change the returns to call displayRound(message)
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                winner = "computer";
                return "You lose. Paper beats Rock."
            }
            else { // Scissors
                winner = "player";
                return "You win! Rock beats Scissors."
            }
        case "paper":
            if (computerSelection === "rock") {
                winner = "player";
                return "You win! Paper beats Rock."
            }
            else { // Scissors
                winner = "computer";
                return "You lose. Scissors beats Paper."
            }
        case "scissors":
            if (computerSelection === "rock") {
                winner = "computer";
                return "You lose. Rock beats Scissors."
            }
            else { // Paper
                winner = "player";
                return "You win! Scissors beats Paper."
            }
        default: // Error with player choice
            "There seems to be something wrong with your choice."
    }

    // winner is set, call the checkGame function
    checkGame(winner);
}

function newGame() {
    // reset the scores to 0
    playerScore = 0;
    computerScore = 0;
}

// TODO impliment checkGame
function checkGame(winner) {
    // check the results of playRound()
    // if didWin == "none", "computer", "plyaer", or "neither"
    // update the score
    // display the updated score
    // check if one player has score of 5
    // if yes, then end game
    switch(winner) {
        case "computer":
            computerScore += 1
        case "player":
            playerScore += 1
        default:
            console.log("no winner")
    }
}

// TODO impliment displayRound
function displayRound(message) {

}

function game() {
    // define score vars
    let playerScore = 0
    let computerScore = 0
    
    // get the player and the computer selections
    //let playerSelection = aaa // Get the player selection based on the selected button
    //let computerSelection = computerPlay()

    // play the round and store the result
    //let result = playRound(playerSelection, computerSelection)

    // check for the winner to add to score
    if (result.includes("win")) {
        playerScore += 1
    }
    else if (result.includes("lose")) {
        computerScore += 1
    }

    // output the result to console
    console.log(result)

    /* Remove the 5 round result for now
    // check the scores to display a winner
    console.log("Your score: " + playerScore)
    console.log("Computer score: " + computerScore)

    if (playerScore > computerScore) {
        console.log("You win!")
    }
    else if (computerScore > playerScore) {
        console.log("You lost. :(")
    }
    else { // Draw
        console.log("It was a draw.")
    } 
    */
}

// Event listeners
const buttons = document.querySelectorAll('.play-buttons');
const newGameBtn = document.querySelector('#new-game-button')
const btnContainer = document.querySelector('.play-buttons');

// Play buttons event listener
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent, computerPlay()); // passes the context of the button text as the selection
    })
});

newGameBtn.addEventListener('click', function () {
    // hide the new game button, show the play buttons
    // and start the game
    newGameBtn.classList.add("invisible");
    btnContainer.classList.remove("invisible");

});

/*
const rockBtn = document.querySelector('#rock-button');
const paperBtn = document.querySelector('#paper-button');
const scissorsBtn = document.querySelector('#scissors-button');

rockBtn.addEventListener('click', playRound("Rock", computerPlay()));
paperBtn.addEventListener('click', playRound("Paper", computerPlay()));
scissorsBtn.addEventListener('click', playRound("Scissors", computerPlay()));

console.log(rockBtn)
console.log(paperBtn)
console.log(scissorsBtn)
*/