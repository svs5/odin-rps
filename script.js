function random(number){
  return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice(){
  let compChoice
  if(random() === 1){
    compChoice = "rock";
  }
  else if(random() === 2 ){
    compChoice = "paper";
  }
  else{
    compChoice = "scissors";
  }

  return compChoice;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
      console.log("Tie!");
    }
    else if((playerSelection === "rock" && computerSelection == "paper")){
      console.log("Computer wins!");
    }
    else if(playerSelection === "paper" && computerSelection == "scissors"){
      console.log("Computer wins!");
    }
    else if(playerSelection === "scissors" && computerSelection == "rock"){
      console.log("Computer wins!");
    }
    else{
      console.log("Player wins!");
    }
  }

const playerSelection = "rock";
const computerSelection = getComputerChoice();

for(let i =1; i<=5; i++){
  console.log(playRound(playerSelection, computerSelection))
}