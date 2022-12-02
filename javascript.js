function computerChoice(){let compChoice = (Math.floor(Math.random()*3))
if (compChoice === 0){
   return "rock"}
  else if(compChoice === 1){
     return "paper"
    } else if(compChoice ===2){
      return  "scissors"
    }
}

/*function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie!"
    } else if ((playerSelection === "Rock") && (computerSelection === "Paper") || playerSelection === "Paper" && computerSelection === "Scissors"
    || playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You lose!";
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors") || playerSelection === "Paper" && computerSelection ==="Rock"
    || playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You win!"
    }
}*/

        let playerScore = 0;
        let compScore = 0;
        let compGames = 0;
        let playerGames = 0;

function playGame(){
    for (let i = 0; i<50; i++){
        const playerSelection = prompt("Choose");
        const playerSelectionLower = playerSelection.toLowerCase();
        const computerSelection = computerChoice();
        console.log("You selected" + " " + playerSelectionLower);
        console.log("Computer selected" + " " + computerSelection);
       // playRound(playerSelection,computerSelection);
            if (playerSelectionLower === "rock" && computerSelection === "paper" || playerSelectionLower === "paper" && computerSelection ==="scissors"
            || playerSelectionLower === "scissors" && computerSelection ==="rock"){
                    ++compScore;
                    console.log("You lose!");
            } else if (playerSelectionLower === "rock" && computerSelection === "scissors" || playerSelectionLower === "paper" && computerSelection === "rock"
            || playerSelectionLower === "scissors" && computerSelection === "paper"){
                ++playerScore;
                console.log("You win!");
            } else if (playerSelectionLower === computerSelection){
                console.log("Tie!")
            }
        console.log("Your score is " + playerScore);
        console.log("Computer's score is " + compScore);
        if (playerScore === 5){
            playerScore = 0;
            compScore = 0;
            ++playerGames;
            console.log("Game over! You win!");
            checkGames();
            return "Play again!"
        } else if (compScore === 5){
            playerScore = 0;
            compScore = 0;
            ++compGames;
            console.log("Game over! You lose!");
            checkGames();
            return "Play again!"
        }
     
    }
}

function checkGames(){
    console.log("Number of games won by computer: " + compGames);
    console.log("Number of games won by player: "+ playerGames)
}

console.log(playGame())