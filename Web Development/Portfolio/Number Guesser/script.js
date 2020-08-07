let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, computerGuess, target) => {
  const userDef = Math.abs(userGuess - target);
  const compDef = Math.abs(computerGuess - target);

  if (userDef <= compDef) {
    return true;
  } else {
    return false;
  }
}

const updateScore = winner => {
  switch (winner) {
    case 'human':
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
  }
}

const advanceRound = () => currentRoundNumber++;