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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let round = 1;

    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");
    
    const roundList = document.querySelector("#round");
    const resultsElement = document.querySelector("#results");
    let resetBtn = document.createElement("button");

    const buttons = document.querySelector("#buttons");
    
    let humanSelection, computerSelection = "";

    rockBtn.addEventListener('click', () => {
        makeChoice("rock");
    })

    paperBtn.addEventListener("click", () => {
        makeChoice("paper");
    })

    scissorsBtn.addEventListener("click", () => {
        makeChoice("scissors");
    })

    resetBtn.addEventListener("click", () => {
        restartGame();
    })

    function makeChoice(humanChoice) {

        computerSelection = getComputerChoice();
        humanSelection = humanChoice;
        console.log(humanSelection);
        playRound(humanSelection, computerSelection);

        if(humanScore === 5 || computerScore === 5) {
            displayResults();
            resetBtn.textContent = "Restart game!";
            resultsElement.appendChild(resetBtn);
            buttons.style.display = "none";
        }
    }

    function displayResults() {
        const resultsText = document.createElement("span");

        if (humanScore > computerScore) {
            resultsText.textContent = "Game over! You won! " + "Human score: " + humanScore + ". Computer score: " + computerScore + ".";
            resultsElement.appendChild(resultsText);
            console.log("Game over! You won! " + "Human score: " + humanScore + ". Computer score: " + computerScore + ".");
        } else if (computerScore > humanScore) {
            resultsText.textContent = "Game over! You lost! " + "Human score: " + humanScore + ". Computer score: " + computerScore + ".";
            resultsElement.appendChild(resultsText);
            console.log("Game over! You lost! " + "Human score: " + humanScore + ". Computer score: " + computerScore + ".");
        } else {
            resultsText.textContent = "Game over! It's a tie! " + "Human score: " + humanScore + ". Computer score: " + computerScore + ".";
            resultsElement.appendChild(resultsText);
            console.log("Game over! It's a tie! " + "Human score: " + humanScore + ". Computer score: " + computerScore + ".");
        }
    }

    function restartGame() {
        round = 1;
        humanScore = 0;
        computerScore = 0;
        buttons.style.display = "block";
        resultsElement.removeChild(resetBtn);
        resultsElement.textContent = "";
        while (roundList.firstChild) {
            roundList.removeChild(roundList.firstChild);
        }
    }


    
    function playRound(humanChoice, computerChoice) {
    
        const winMessage = "Round: " + round + ". You won! " + humanChoice + " beats " + computerChoice;
        const loseMessage = "Round: " + round + ". You lost! " + computerChoice + " beats " + humanChoice;
        const tieMessage = "Round: " + round + ". It's a tie! " + humanChoice + " draws " + computerChoice;

        const roundListItem = document.createElement("li");
    
        function humanWin() {
            round++;
            humanScore++;
            roundListItem.textContent = winMessage + ". Human score: " + humanScore + ". Computer score: " + computerScore + ".";
            roundList.appendChild(roundListItem);

            console.log(winMessage + ". Human score: " + humanScore + ". Computer score: " + computerScore + ".");
        }
    
        function computerWin() {
            round++;
            computerScore++;
            roundListItem.textContent = loseMessage + ". Human score: " + humanScore + ". Computer score: " + computerScore + ".";
            roundList.appendChild(roundListItem);
            console.log(loseMessage + ". Human score: " + humanScore + ". Computer score: " + computerScore + ".");
        }
    
        if (humanChoice === computerChoice) {
            round++;
            roundListItem.textContent = tieMessage + ". Human score: " + humanScore + ". Computer score: " + computerScore + ".";
            roundList.appendChild(roundListItem);
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

}

playGame();