function computerChoice(){const compChoice = (Math.floor(Math.random()*3))
if (compChoice === 0){
   return "Rock"}
  else if(compChoice === 1){
     return "Paper"
    } else if(compChoice ===2){
      return  "Scissors"
    }
}




const computerSelection = computerChoice();
const playerSelection = prompt("Choose rock, paper or scissors:");
console.log("You selected" + " " + playerSelection);
console.log("Computer selected" + " " + computerChoice())


function playRound (playerSelection, computerSelection){
    if(playerSelection="Rock",computerSelection="Rock") {console.log("Tie!")

    }
} 