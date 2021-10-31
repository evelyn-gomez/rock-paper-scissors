const INITIAL_SCORE = 0;
const MAX_SCORE = 5;
const PLAYER = 'player';
const COMPUTER = 'computer';

const ROCK = 'rock';
const PAPER = 'paper';    
const SCISSORS = 'scissors';

const ALL_OPTIONS = Object.freeze([
    { name: 'Rock', value: ROCK, },
    { name: 'Paper', value: PAPER },
    { name: 'Scissors', value: SCISSORS }
]);

const WEAKNESSES = Object.freeze({
    [ROCK]: PAPER,
    [PAPER]: SCISSORS,
    [SCISSORS]: ROCK,
});

function getComputerChoice() {
    let randomPick = Math.floor(Math.random() * ALL_OPTIONS.length);
    return ALL_OPTIONS[randomPick].value;
}

function getWinner(pChoice, cChoice){
    if (pChoice === cChoice) {
        return null;
    }

    if (cChoice === WEAKNESSES[pChoice]) {
        return COMPUTER;
    }

    return PLAYER;
}

const startGame = () => {
    let pScore = INITIAL_SCORE; 
    let cScore = INITIAL_SCORE;

    function updateScoreBoard() {
        const cPara = document.querySelector('.computerScore p'); 
        const pPara = document.querySelector('.playerScore p');
        cPara.textContent = cScore;
        pPara.textContent = pScore;
    }

    // initialize score board
    updateScoreBoard();

    // initialize option buttons
    optionsContainer = document.querySelector('.optionsContainer');
    for (let option of ALL_OPTIONS) {
        let button = document.querySelector(`[data-option=${option.value}`);
        if (!button) {
            button = document.createElement('button');
            button.setAttribute('data-option', option.value);
            button.className = 'options';
            button.onclick = () => onPlayerChoice(option.value);
            button.textContent = option.name;
            optionsContainer.appendChild(button);
        }
    }

   
    function updateScore(winner) {
        if (winner === COMPUTER) {
            console.log('c wins this round');
            cScore++;
        } 
        if (winner === PLAYER) {
            console.log('p wins this round');   
            pScore++;
        } else {
            console.log('DRAW'); 
        }
        updateScoreBoard();
    }

    function checkGameEnded() {
        if (pScore >= MAX_SCORE) {
            alert('You win the game, c loses');
            return true;
        } else if (cScore >= MAX_SCORE) {
            alert('You lose game, c wins');
            return true;
        } else {
          return false;  
        }
    }

    function clearGame() {
        pScore = cScore = INITIAL_SCORE;
    }

    function onPlayerChoice(choice) {
        let computerChoice = getComputerChoice();  
        let winner = getWinner(choice, computerChoice); 
        updateScore(winner);

        setTimeout(() => {
            let gameOver = checkGameEnded();
            if (gameOver) {
                clearGame();
                resetPage();
            }
        });
    }
}

const introScreen = document.querySelector('.intro');
const playContainer = document.querySelector('.playContainer');
const winnerScreen = document.querySelector('.winnerContainer')

function initializePlayButton() {
    const playBtn = document.querySelector('#introBtn'); 
    playBtn.onclick = function() {
        introScreen.classList.add('fadeOut');
        playContainer.classList.add('fadeIn');
        winnerScreen.classList.add('fadeOut');
        startGame();
    };    
}

function resetPage() {
    introScreen.classList.remove('fadeOut');
    playContainer.classList.remove('fadeIn');
    winnerScreen.classList.remove('fadeOut');
}


function main() {
    // collect each page element and store it in a const
    // setActivePage(INTRO_PAGE)
    initializePlayButton();
}

const MYCONST = 'asd';

let mutableGlobalVar = 5

class Person {
    person;

    init() {
        let person = this.person
        let personWithFullName = this.addLastName(person, 'Smith');
        console.log(person.name);
    };

    /**
     * Adds a last name to a person
     * 
     * @param {Object} person the person object to update
     * @param {string} lastName the last name to add
     * @returns a new person with fullName populated
     */
    addLastName(person, lastName) {
        return { ...person, fullName: this.person.name + ' ' + lastName }
    }
}

let myPerson = new Person();


main();

// // Array - Play 

// // Object.keys(WEAKNESSES) => [ROCK, PAPER, SCISSORS].forEach(key => );
// // Object.values(WEAKNESSES) => [PAPER, SCISSORS, ROCK].forEach(val => );
// // Object.entries(WEAKNESSES) => [[ROCK, PAPER], [PAPER, SCISSORS], [SCISSORS, ROCK]].forEach(([key, val]) => );
// //['rock', 'paper', 'scissor'].forEach(val => val.toUpperCase());

// const INTRO_PAGE = 'introduction';
// const GAME_PAGE = 'game';
// const WINNER_PAGE = 'winner';

// let activePage = GAME_PAGE;

// function setActivePage(page) {
//     for (let pageEl of pageElements) {
//         let isActive = // pageEl.name === page
//         if (isActive) {
//             rootElement.appendChild(pageEl);
//         } else {
//             // remove if already appended
//         }
//     }
// }

// const pageElements = [];
