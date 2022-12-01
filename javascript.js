function computerChoice(){let compChoice = (Math.floor(Math.random()*3))
if (compChoice === 0){
   return "Rock"}
  else if(compChoice === 1){
     return "Paper"
    } else if(compChoice ===2){
      return  "Scissors"
    }
}




/*const computerSelection = computerChoice();*/
/*const playerSelection = prompt("Choose rock, paper or scissors:");*/



function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie!"
    } else if ((playerSelection === "Rock") && (computerSelection === "Paper") || playerSelection === "Paper" && computerSelection === "Scissors"
    || playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You lose!";
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors") || playerSelection === "Paper" && computerSelection ==="Rock"
    || playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You win!"
    }
}

let playerScore = 0;
let compScore = 0;
function playGame(){
    for (let i = 0; i<50; i++){
        const playerSelection = prompt("Choose");
        const computerSelection = computerChoice();
        console.log("You selected" + " " + playerSelection);
        console.log("Computer selected" + " " + computerSelection);
        playRound(playerSelection,computerSelection);
            if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection ==="Scissors"
            || playerSelection === "Scissors" && computerSelection ==="Rock"){
                    ++compScore;
                    console.log("You lose!");
            } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock"
            || playerSelection === "Scissors" && computerSelection === "Paper"){
                ++playerScore;
                console.log("You win!");
            } else if (playerSelection === computerSelection){
                console.log("Tie!")
            }
        console.log("Your score is " + playerScore);
        console.log("Computer's score is " + compScore);
        if (playerScore === 5){
            return "Game over! You win!"
        } else if (compScore === 5){
            return "Game over! You lose!"
        }
     
    }
}



console.log(playGame())