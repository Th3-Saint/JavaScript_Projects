'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const Player0El = document.querySelector('.player--0');
const Player1El = document.querySelector('.player--1');

let Players = [0, 0];
let Currentscore = 0;
let activePlayer = 0;
let playing = true;

score0El.textContent = "0";
score1El.textContent = "0";
diceEl.classList.add('hidden');

const init = function () {
    Players = [0, 0];
    Currentscore = 0;
    activePlayer = 0;
    playing = true;
    diceEl.classList.add('hidden');
    Player0El.classList.remove('player--winner');
    Player1El.classList.remove('player--winner');
    Player0El.classList.add('player--active');
    Player1El.classList.remove('player--active');
    score0El.textContent = 0;
    score1El.textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

};

const switchPlayers  = function() {
        Currentscore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = "0";
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
}

btnRoll.addEventListener('click', function() {
    if (playing) {
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
}
);

btnHold.addEventListener('click', function() {
    if (playing) {
        Players[activePlayer] += Currentscore;
        document.getElementById(`score--${activePlayer}`).textContent = Players[activePlayer];
        if (Players[activePlayer] >= 100){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        playing = false;
        diceEl.classList.add('hidden');
    }
    else {
        switchPlayers();
    }
    }
}
);

btnNew.addEventListener('click', init);
