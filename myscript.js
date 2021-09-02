
let paperBtn =document.querySelector('#paper');
let rockBtn = document.querySelector('#rock');
let scissorsBtn = document.querySelector('#scissors');

// Computer returns random 'rock, paper or scissors';
function computerPlay() {
    let allOptions = ['rock','paper','scissors'];
    let randomPick = Math.floor(Math.random() * allOptions.length);
    return allOptions[randomPick];
}

let playerSelection = 'rOCk';

//@Andrew's Logic - helped 
const PLAYER = 'player';
const COMPUTER = 'computer';

let ROCK = 'rock';
let PAPER = 'paper';
let SCISSORS = 'scissors';
 
// WEAKNESSES is a POJO - using it as a map/hash/dictionary; 
// to store key-value pairs. playerChoice is evaluted as key, and return what beats it
//@Andrew's Logic 
let WEAKNESSES = {
    [ROCK]: PAPER,
    [PAPER]: SCISSORS,
    [SCISSORS]: ROCK,
};

// Object.keys(WEAKNESSES) => [ROCK, PAPER, SCISSORS].forEach(key => );
// Object.values(WEAKNESSES) => [PAPER, SCISSORS, ROCK].forEach(val => );
// Object.entries(WEAKNESSES) => [[ROCK, PAPER], [PAPER, SCISSORS], [SCISSORS, ROCK]].forEach(([key, val]) => );
//['rock', 'paper', 'scissor'].forEach(val => val.toUpperCase());

     
/** 
 * @param {string} playerSelecton
 * @param {string} computerSelection 
 * @returns string - the winner or null if it's a draw 
 * @WEAKNESSESS[playerChoice] - it returns what beats playerChoice. 
 * Evaluted against computerSelection, if that same then means computer Wins else player wins. 
 * @Andrew's logic 
 */

function singlePlay(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();
    if (playerChoice === computerSelection) {
        return null;
    }
    if (computerSelection === WEAKNESSES[playerChoice]) {
        return COMPUTER;
    }
    return PLAYER;
}
 /**
  * if computerPlay() returns null, default gets evaluted and the
  * counter restarts from last iteration.
  * @returns 
  */
function game() {
    let setScore = [];
    let computerScore = [];
    for (let i = 1; i < 5; i++) {
        let computerSelection = computerPlay(); 
        let playerSelection = prompt('Choose your weapon! Rock, Paper, or Scissors');
        let winner = singlePlay(playerSelection, computerSelection); 
        switch (winner) {
            case COMPUTER:
                computerScore.push(1);
                console.log(`You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`);
                break;
            case PLAYER:
                setScore.push(1);
                console.log(`You win! ${playerSelection.toLowerCase()} beats ${computerSelection}.`);
                break;
            default:
                i--;
                console.log('No winner, play again.'); 
                break;
        }
    }
    return setScore.length < computerScore.length ? 'You lose!' : 'You win!';
}
