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

function playRound(humanChoice, computerChoice){
    let text;
    switch (computerChoice){
	    case "rock":
		    if (humanChoice == "rock"){
			    text = gameConsole.createTextNode("\nIts a tie!");
                gameConsole.appendChild(text);
			    break;
		    }else if (humanChoice == "paper"){
			    text = gameConsole.createTextNode("\nYou win!");
                gameConsole.appendChild(text);
			    humanScore++;
			    break;
		    }else {
			    text = gameConsole.createTextNode("\nYou lose!");
                gameConsole.appendChild(text);
			    computerScore++;
			    break;
		    }
	    case "paper":
		    if (humanChoice == "paper"){
			    text = gameConsole.createTextNode("\nIts a tie!");
                gameConsole.appendChild(text);
			    break;
		    }else if (humanChoice == "scissors"){
			    text = gameConsole.createTextNode("\nYou win!");
                gameConsole.appendChild(text);
			    humanScore++;
			    break;
		    }else {
			    text = gameConsole.createTextNode("\nYou lose!");
                gameConsole.appendChild(text);
			    computerScore++;
			    break;
		    }
	    case "scissors":
		    if (humanChoice == "scissors"){
			    text = gameConsole.createTextNode("\nIts a tie!");
                gameConsole.appendChild(text);
			    break;
		    }else if (humanChoice == "rock"){
			    text = gameConsole.createTextNode("\nYou win!");
                gameConsole.appendChild(text);
			    humanScore++;
			    break;
		    }else {
			    text = gameController.createTextNode("\nYou lose!");
                gameConsole.appendChild(text);
			    computerScore++;
			    break;
		    }
    }
    gamesPlayed++;
};
	let computerScore = 0;
	let humanScore = 0;
	let humanChoice;
	let computerChoice;
    let gamesPlayed; 

const gameController = document.querySelector("div.gameController");
const gameConsole = document.querySelector("div.gameConsole");

function initGame(){
    computerChoice = getComputerChoice();
    let text;
    if (gamesPlayed = 5){
        text = gameConsole.createTextNode(`
            The score is: Computer: ${computerScore} You: ${humanScore}.
            The winner is ${computerScore > humanScore ? "the computer!" : "you!"}`);
        gamesPlayed = 0;
        gameConsole.appendChild(text);
    }else if(gamesPlayed < 5 && gamesPlayed > 0){
        text = gameConsole.createTextNode(`
            The current score is: Computer: ${computerScore} You: ${humanScore}
            You played ${humanChoice}.
            The computer played ${computerChoice}.`);
        gameConsole.appendChild(text);
    }else{
        gameConsole.textContent = "Thanks for starting the game.";
        text = gameConsole.createTextNode(`
            You played ${humanChoice}.
            The computer played ${computerChoice}.`);
        gameConsole.appendChild(text);
    };
};

function btnPress(event){
    humanChoice = event.class;
    initGame();
    playRound(humanChoice, computerChoice);
};

gameController.addEventListener("click", btnPress(event));