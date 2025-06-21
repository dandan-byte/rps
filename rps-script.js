function getComputerChoice(){
	let choice = "";
	let chance = (Math.random()*100);
	
	if (chance > 66){
		choice = "rock";
	}else if ((chance <= 66) && (chance > 33)){
		choice = "scissors";
	}else {
		choice = "paper";
	}
	console.log(`The computer played ${choice}.`);
	
	return choice;
};

function getHumanChoice(){
	let choice = prompt("What will you choose?", "").toLowerCase();
	console.log(`You played ${choice}.`);
	return choice;
};

function playGame(){
	function playRound(humanChoice, computerChoice){
	switch (computerChoice){
		case "rock":
			if (humanChoice == "rock"){
				console.log("Its a tie!")
				break;
			}else if (humanChoice == "paper"){
				console.log("You win!");
				humanScore++;
				break;
			}else {
				console.log("You lose!")
				computerScore++;
				break;
			}
		case "paper":
			if (humanChoice == "paper"){
				console.log("Its a tie!")
				break;
			}else if (humanChoice == "scissors"){
				console.log("You win!")
				humanScore++;
				break;
			}else {
				console.log("You lose!")
				computerScore++;
				break;
			}
			case "scissors":
				if (humanChoice == "scissors"){
				console.log("Its a tie!")
				break;
			}else if (humanChoice == "rock"){
				console.log("You win!")
				humanScore++;
				break;
			}else {
				console.log("You lose!")
				computerScore++;
				break;
			}
		}
	};
	let computerScore = 0;
	let humanScore = 0;
	let humanChoice;
	let computerChoice;
	
	for (let rounds = 0; rounds < 5; rounds++){
		humanChoice = getHumanChoice();
		computerChoice = getComputerChoice();
		
		playRound(humanChoice, computerChoice);
		
	}
	
	console.log(`The scores are as follows: 
			Human: ${humanScore}
			Computer: ${computerScore}`);
			
			if (humanScore > computerScore){
				console.log("You win the whole game!");
			}else if (computerScore > humanScore){
				console.log("Oh no, you lost the whole game!");
			}else {
				console.log("Its a tie!");
			}
};

playGame();