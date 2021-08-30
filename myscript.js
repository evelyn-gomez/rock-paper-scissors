
let paperBtn =document.querySelector('#paper');
let rockBtn = document.querySelector('#rock');
let scissorsBtn = document.querySelector('#scissors');


// Computer returns random 'rock, paper or scissors';
function computerPlay() {
    let allOptions = ['rock','paper','scissors'];
    let randomPick = Math.floor(Math.random() * allOptions.length);
    return allOptions[randomPick];
}

