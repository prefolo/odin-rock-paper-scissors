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

function game() {
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		let playerSelection = prompt('Choose Rock, Paper or Scissors.');
		let computerSelection = getComputerChoice();

		let result = playRound(playerSelection, computerSelection);

        if (result == undefined) {
            console.log(i + 1 + '. You didn\'t enter a rock, paper or scissors value. This round is skipped.');
            continue;
		}

		if (result.startsWith('You Won')) playerScore++;
		if (result.startsWith('You Lose')) computerScore++;

		console.log(i + 1 + '. ' + result);
	}

	if (playerScore > computerScore) console.log('You Won!');
	if (playerScore < computerScore) console.log('You Lose!');
	if (playerScore == computerScore) console.log('Tie.');
}
