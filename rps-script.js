/*Function definitions*/
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

	return choice;
};

function playRound(humanChoice, computerChoice){
    let text;
    switch (computerChoice){
	    case "rock":
		    if (humanChoice == "rock"){
			    text = document.createTextNode("\nIts a tie!");
                gameConsole.appendChild(text);
				++gamesPlayed;
			    break;
		    }else if (humanChoice == "paper"){
			    text = document.createTextNode("\nYou win!");
                gameConsole.appendChild(text);
			    humanScore++;
				++gamesPlayed;
			    break;
		    }else {
			    text = document.createTextNode("\nYou lose!");
                gameConsole.appendChild(text);
			    computerScore++;
				++gamesPlayed;
			    break;
		    }
	    case "paper":
		    if (humanChoice == "paper"){
			    text = document.createTextNode("\nIts a tie!");
                gameConsole.appendChild(text);
				++gamesPlayed;
			    break;
		    }else if (humanChoice == "scissors"){
			    text = document.createTextNode("\nYou win!");
                gameConsole.appendChild(text);
			    humanScore++;
				++gamesPlayed;
			    break;
		    }else {
			    text = document.createTextNode("\nYou lose!");
                gameConsole.appendChild(text);
			    computerScore++;
				++gamesPlayed;
			    break;
		    }
	    case "scissors":
		    if (humanChoice == "scissors"){
			    text = document.createTextNode("\nIts a tie!");
                gameConsole.appendChild(text);
				++gamesPlayed;
			    break;
		    }else if (humanChoice == "rock"){
			    text = document.createTextNode("\nYou win!");
                gameConsole.appendChild(text);
			    humanScore++;
				++gamesPlayed;
			    break;
		    }else {
			    text = document.createTextNode("\nYou lose!");
                gameConsole.appendChild(text);
			    computerScore++;
				++gamesPlayed;
			    break;
		    }
    }

};

function initGame(gamesPlayed){
    computerChoice = getComputerChoice();
    let text;
    if (gamesPlayed === 5){
        gameConsole.appendChild(document.createElement("br"));
		text = document.createTextNode(`
            The score is: Computer: ${computerScore} You: ${humanScore}.
            The winner is ${computerScore > humanScore ? "the computer!" : computerScore == humanScore ? "neither of you, it's a tie!" : "you!"}`);
        gameConsole.appendChild(text);
    }else if(gamesPlayed > 0){
		gameConsole.appendChild(document.createElement("br"));
        text = document.createTextNode(`
            The current score is: Computer: ${computerScore} You: ${humanScore}
            You played ${humanChoice}.
            The computer played ${computerChoice}.`);
        gameConsole.appendChild(text);
    }else{
        gameConsole.textContent = "Thanks for starting the game.";
        text = document.createTextNode(`
            You played ${humanChoice}.
            The computer played ${computerChoice}.`);
        gameConsole.appendChild(text);
    };
};

function btnPress(event){
    humanChoice = e.target.className;
    initGame(gamesPlayed);
	if(gamesPlayed >= 5){
		gamesPlayed = 0;
	}else if(gamesPlayed < 5){
		playRound(humanChoice, computerChoice);
	};
};


/*Variable declarations*/
let computerScore = 0;
let humanScore = 0;
let humanChoice;
let computerChoice;
let gamesPlayed = 0; 
const gameController = document.querySelector("div.gameController");
const gameConsole = document.querySelector("div.gameConsole");

gameController.addEventListener("click", (e) => {
	humanChoice = e.target.className;
	if(gamesPlayed >= 5){
		initGame(gamesPlayed);
		gamesPlayed = 0;
		computerScore = 0;
		humanScore = 0;
	}else if(gamesPlayed < 5){
		initGame(gamesPlayed)
		playRound(humanChoice, computerChoice);
	};
});