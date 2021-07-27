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

const playerSelection = "paper"
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))