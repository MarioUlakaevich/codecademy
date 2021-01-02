let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*10)

const compareGuesses = (userGuess, compGuess, number) => {
  if(Math.abs(userGuess-number) <= Math.abs(compGuess-number)) return true
  if(Math.abs(userGuess-number) > Math.abs(compGuess-number)) return false 
}

const updateScore = str => {
  if (str === 'human') humanScore++
  else computerScore++
}

const advanceRound = () => currentRoundNumber++
