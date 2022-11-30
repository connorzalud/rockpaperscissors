const compChoice = Math.floor(Math.random()*3)
console.log(compChoice);

function computerChoice(){
if (compChoice === 0){
   return console.log("Rock")}
  else if(compChoice === 1){
     return   console.log("Paper")
    } else if(compChoice ===2){
      return  console.log("Scissors")
    }
}

computerChoice()