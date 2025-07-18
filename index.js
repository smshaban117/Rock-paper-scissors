function getComputerChoice() {
   let randomNum = Math.random();

 if (randomNum < 0.33)
 {return "rock";}
 else if (randomNum < 0.66)
 {return "paper";}
 else {return "scissors";}
}

function getHumanChoice(){
  let game = prompt("rock, paper, scissors shoot!");
  if (game==="rock") {return "rock";}
  else if (game==="paper") {return "paper";}
  else {return "scissors";}

}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  if (humanChoice == "rock" && computerChoice == "scissors")
  { humanScore++
    return "You win, rock beats scissors"}
  else if (humanChoice == "paper" && computerChoice == "rock")
  { humanScore++
    return "You win, paper beats rock "}
  else if (humanChoice == computerChoice) 
  { return "It's a draw"}
  else { computerScore++
    return "You lose, try again"}

}

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const = scissors = document.querySelector("#scissors")

rock.addEventListener("click", playRound)
paper.addEventListener("click", playRound)
scissors.addEventListener("click", playRound)