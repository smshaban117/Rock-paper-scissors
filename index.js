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
  let result=""
  if (humanChoice == "rock" && computerChoice == "scissors")
  { humanScore++
    return result = "You win, rock beats scissors"}
  else if (humanChoice == "paper" && computerChoice == "rock")
  { humanScore++
    return result = "You win, paper beats rock "}
  else if (humanChoice == computerChoice) 
  { return result = "It's a draw"}
  else if (humanChoice =="scissors" && computerChoice =="paper" )
   { humanScore++
   return result = "You win, scissors beats paper"}
  else { computerScore++
    return result = "You lose, try again"}

   

}

function winner(){
if (humanScore == 5 && computerScore < 5)
{ return "You are the winner"}
else if (computerScore == 5 && humanScore < 5)
{return "You are a loser"}
  else {return ""}}
 
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

const output = document.querySelector("#output")

const output2 = document.querySelector("#output2")
const output3 = document.querySelector("#output3")


rock.addEventListener("click", function()
{ if (humanScore === 5 || computerScore === 5) return;
  output.innerHTML += playRound("rock",getComputerChoice()) + "<br>";
  output2.innerHTML = `Score - Human: ${humanScore} | Computer ${computerScore}`
   let message = winner()
   if (message !=="") output3.innerHTML = message

 });

paper.addEventListener("click", function() 
{
  if (humanScore === 5 || computerScore === 5) return;
output.innerHTML +=  playRound("paper", getComputerChoice()) + "<br>";
output2.innerHTML = `Score - Human: ${humanScore} | Computer ${computerScore}`
   let message = winner()
   if (message !=="") output3.innerHTML = message
 });

scissors.addEventListener("click", function() 
{if (humanScore === 5 || computerScore === 5) return;
  output.innerHTML +=  playRound("scissors", getComputerChoice())+ "<br>" ;
output2.innerHTML = `Score - Human: ${humanScore} | Computer ${computerScore}`
   let message = winner()
   if (message !=="") output3.innerHTML = message});





