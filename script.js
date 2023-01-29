const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let playerSelection;
let computerSelection;
let result;

possibleChoices.forEach((possibleChoice) =>
	possibleChoice.addEventListener("click", (e) => {
		playerSelection = e.target.id;
		userChoiceDisplay.innerHTML = playerSelection.toUpperCase();
		computerSelection = computerPlay();
		playRound(playerSelection, computerSelection);
	})
);

function computerPlay() {
	const random = ["rock", "paper", "scissors"];
	const computerSelection = random[Math.floor(Math.random() * random.length)];
	computerChoiceDisplay.innerHTML = computerSelection.toUpperCase();
	return computerSelection;
}

function playRound(playerSelection, computerSelection) {
	if (computerSelection === playerSelection) {
		result = "There was a tie";
	} else if (computerSelection === "rock" && playerSelection === "paper") {
		result = "You Win";
	} else if (computerSelection === "rock" && playerSelection === "scissors") {
		result = "You Lost";
	} else if (computerSelection === "paper" && playerSelection === "rock") {
		result = "You Lost";
	} else if (computerSelection === "paper" && playerSelection === "scissors") {
		result = "You Win";
	} else if (computerSelection === "scissors" && playerSelection === "rock") {
		result = "You Win";
	} else if (computerSelection === "scissors" && playerSelection === "paper") {
		result = "You Lost";
	}
	resultDisplay.innerHTML = result;
}
