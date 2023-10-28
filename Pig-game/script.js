'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

let Players = [0, 0];
let Currentscore = 0;
let activePlayer = 0;

score0El.textContent = "0";
score1El.textContent = "0";
diceEl.classList.add('hidden');

const switchPlayers  = function() {
        Currentscore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = "0";
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}

btnRoll.addEventListener('click', function() {
    let dice = Math.trunc(Math.random() * 6 + 1);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
        Currentscore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = Currentscore;
    }
    else
        switchPlayers();
}
);

btnHold.addEventListener('click', function() {
    Players[activePlayer] += Currentscore;
    if (Players[activePlayer] >= 100){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    }
    else {
        document.querySelector(`#score--${activePlayer}`).textContent = Players[activePlayer];
        switchPlayers();
    }
}
);