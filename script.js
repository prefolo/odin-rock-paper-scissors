function getComputerChoice() {
	let randomNumber = Math.random();

	if (randomNumber <= 0.3) return 'Rock';
	if (randomNumber <= 0.6) return 'Paper';
	return 'Scissors';
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	if (playerSelection == computerSelection)
		return 'Same selection. Play again.';

	if (playerSelection == 'rock') {
		if (computerSelection == 'paper') return 'You Lose! Paper beats Rock';

		if (computerSelection == 'scissors')
			return 'You Won! Rock beats Scissors';
	}

	if (playerSelection == 'paper') {
		if (computerSelection == 'rock') return 'You Won! Paper beats Rock';

		if (computerSelection == 'scissors')
			return 'You Lose! Scissors beats Paper';
	}

	if (playerSelection == 'scissors') {
		if (computerSelection == 'rock') return 'You Lose! Rock beats Scissors';

		if (computerSelection == 'paper')
			return 'You Won! Scissors beats Paper';
	}
}

const buttons = document.querySelectorAll('button');
const resultBox = document.querySelector('.results');

let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

function game(e) {
	let playerSelection = e.target.innerText;
	let computerSelection = getComputerChoice();

	let result = playRound(playerSelection, computerSelection);

	if (result.startsWith('You Won')) playerScore++;
	if (result.startsWith('You Lose')) computerScore++;

	if (roundCount == 0) resultBox.innerHTML = '';
	resultBox.innerHTML += roundCount + 1 + '. ' + result + '<br>';

	roundCount++;

	if (roundCount > 4) {
		resultBox.innerHTML += '<br><br>';
		if (playerScore > computerScore)
			resultBox.innerHTML += '<b>You Won!</b>';
		if (playerScore < computerScore)
			resultBox.innerHTML += '<b>You Lose!</b>';
		if (playerScore == computerScore) resultBox.innerHTML += '<b>Tie.</b>';

		roundCount = 0;
		playerScore = 0;
		computerScore = 0;
	}
}

buttons.forEach((button) => {
	button.addEventListener('click', game);
});
