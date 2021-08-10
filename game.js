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

    // same choice
    if (playerSelection === computerSelection) {
        return "It's a Draw!"
    }
    
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "paper") {
                return "You lose. Paper beats Rock."
            }
            else { // Scissors
                return "You win! Rock beats Scissors."
            }
        case "paper":
            if (computerSelection === "rock") {
                return "You win! Paper beats Rock."
            }
            else { // Scissors
                return "You lose. Scissors beats Paper."
            }
        case "scissors":
            if (computerSelection === "rock") {
                return "You lose. Rock beats Scissors."
            }
            else { // Paper
                return "You win! Scissors beats Paper."
            }
        default: // Error with player choice
            "There seems to be something wrong with your choice."
    }
}


function game() {
    // define score vars
    let playerScore = 0
    let computerScore = 0
    
    // get the player and the computer selections
    let playerSelection = aaa // Get the player selection based on the selected button
    let computerSelection = computerPlay()

    // play the round and store the result
    let result = playRound(playerSelection, computerSelection)

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
const rockBtn = document.querySelector('#rock-button');
const paperBtn = document.querySelector('#paper-button');
const scissorsBtn = document.querySelector('#scissors-button');

rockBtn.addEventListener('click', playRound("Rock"));
paperBtn.addEventListener('click', playRound("Paper"));
scissorsBtn.addEventListener('click', playRound("Scissors"));