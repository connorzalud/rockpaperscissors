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
        console.log("Tie!");
    } else if ((playerSelection === "Rock") && (computerSelection === "Paper")){
        console.log("You lose!");
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")){
        console.log("You win!");
    }
}


function playGame(){
    for (let i = 0; i<5; i++){
        const playerSelection = prompt("Choose");
        const computerSelection = computerChoice();
        console.log("You selected" + " " + playerSelection);
        console.log("Computer selected" + " " + computerSelection);
        playRound(playerSelection,computerSelection);
     
    }
}

console.log(playGame())