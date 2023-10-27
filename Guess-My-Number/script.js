'use strict';
let num = Math.floor(Math.random() * 20) + 1;
let score = 20;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess)
        displayMessage('Not a Number!!');
    
        //when number is high
    else if (guess === num) {
        document.querySelector('body').style.backgroundColor = "#008000";
        document.querySelector('.number').textContent = guess;
        document.querySelector('.number').style.width = "30rem";
        displayMessage('Correct Number');
        document.querySelector('.highscore').textContent = score;
    }
    else if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
            displayMessage(guess > num ? 'Too high' : 'Two low');
        }
        else {
            displayMessage("You lose ^ ^");
            document.querySelector('body').style.backgroundColor = "#800020";
            document.querySelector('.score').textContent = 0;
        }
        
    }

);

document.querySelector('.again').addEventListener('click', function (){
    score = 20;
    num = Math.floor(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.number').textContent = "?"; 
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
}
);