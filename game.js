function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let sign = prompt("Make your choice").toLowerCase();
    if (sign === "rock" || sign === "paper" || sign === "scissors") {
        return sign;
    } else {
        console.log("Invalid choice. Try again!");
        return getHumanChoice();
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let round = 1;
    
    function playRound(humanChoice, computerChoice) {
    
        // console.log("Player choice: " + humanChoice);
        // console.log("Computer choice: " + computerChoice);
    
        const winMessage = "Round: " + round + ". You won! " + humanChoice + " beats " + computerChoice;
        const loseMessage = "Round: " + round + ". You lost! " + computerChoice + " beats " + humanChoice;
        const tieMessage = "Round: " + round + ". It's a tie! " + humanChoice + " draws " + computerChoice;
    
        function humanWin() {
            round++;
            humanScore++;
            console.log(winMessage + ". Human score: " + humanScore + ". Computer score: " + computerScore + ".");
        }
    
        function computerWin() {
            round++;
            computerScore++;
            console.log(loseMessage + ". Human score: " + humanScore + ". Computer score: " + computerScore + ".");
        }
    
        if (humanChoice === computerChoice) {
            round = ++round;
            console.log(tieMessage + ". Human score: " + humanScore + ". Computer score: " + computerScore + ".");
        } else {
            switch (humanChoice) {
                case "rock":
                    if (computerChoice === "scissors") {
                        humanWin();
                        break;
                    } else if (computerChoice === "paper") {
                        computerWin();
                        break;
                    }
                case "paper":
                    if (computerChoice === "rock") {
                        humanWin();
                        break;
                    } else if (computerChoice === "scissors") {
                        computerWin();
                        break;
                    }
                case "scissors":
                    if (computerChoice === "paper") {
                        humanWin();
                        break;
                    } else if (computerChoice === "rock") {
                        computerWin();
                        break;
                    }
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Game over! You won! " + "Human score: " + humanScore + ". Computer score: " + computerScore + ".")
    } else if (computerScore > humanScore) {
        console.log("Game over! You lost! " + "Human score: " + humanScore + ". Computer score: " + computerScore + ".")
    } else {
        console.log("Game over! It's a tie! " + "Human score: " + humanScore + ". Computer score: " + computerScore + ".")
    }

}

playGame();