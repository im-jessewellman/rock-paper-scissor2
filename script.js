function computerPlay() {
	const random = ["ROCK", "PAPER", "SCISSORS"];

	const randomSelect = random[Math.floor(Math.random() * random.length)];

	return randomSelect;
}

function playRound(playerSelection, computerSelection) {
	if (computerSelection === playerSelection) {
		return (result = "There was a tie");
	} else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
		return "You Win";
	} else if (computerSelection === "ROCK" && playerSelection === "SCISSORS") {
		return "You Lost";
	} else if (computerSelection === "PAPER" && playerSelection === "ROCK") {
		return "You Lost";
	} else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
		return "You Win";
	} else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
		return "You Win";
	} else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
		return "You Lost";
	}
}


function game(){
	for (let i = 0; i < 5; i++){
		const player = prompt("Enter Rock, Paper, or Scissors: ");
		const playerSelection = player.toUpperCase();
		const computerSelection = computerPlay();
		console.log(playRound(playerSelection, computerSelection));
	}
};

game();