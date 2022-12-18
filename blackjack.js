"use strict";

alert("A message from Radoslav Stefanov! :) \n\n Welcome to this BlackJack Game. Please, first check the rules below:\n\n 1. Please, introduce yourself, add nickname or your name.\n\n 2. You will start with 200 chips.\n\n 3. Every time when you get BlackJack you will earn 50 chips.\n\n 4. Every time when you get out of the game, you will loose 10 chips.\n\n 5. In order you dont want to loose chips if you are out of the game, you can press 'Reset Game' button, and the game will be reset to 0. \n\n 5. If you want, you can play as guest player, in this case there will be no chips in the game.\n\n 6. Please, stay calm and remember - you play for fun, and with no real money :) \n\n So, ENJOY the game!");

let playerChips = 200;
let firstCard;
let secondCard;
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let gamesPlayed = 0;
let playerName;
let playerNameEl = document.getElementById('player-name');

// button sounds
const startSound = document.getElementById("myAudio");
const gotBlackjackSound = document.getElementById("got-blackjack");
const drawMoreCards = document.getElementById("draw-new");


// html elements from the global scope
const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const gamesPlayedEl = document.getElementById("games-played");
const introduceBtnEl = document.getElementById('introduce-btn');
const startGameBtnEl = document.getElementById('start--game');
const newCardBtnEl = document.getElementById('new--card');


// after logging with name or nickname, player chips will be shown!
const playerEl = document.getElementById("player-el");

function gotMoney() {
    playerEl.textContent = "Now you have: " + playerChips + " $";
};

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    gamesPlayedEl.textContent = "Games played: " + gamesPlayed;
    rendertGame();
};

function rendertGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    
    } else if (sum === 21) {
        message = "Wohoo! You have a backJack! 💰";
        hasBlackJack = true;
        blackJackWin();
        playBlackjackAudio();

    }   else { 
        message = "Out of the game! 💩";
        isAlive === false;
        blackJackLoose();
    };

    messageEl.textContent = message;
    cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1];
    sumEl.textContent = "Sum: " + sum;
};

function newCard() {
    if (isAlive = true && sum <= 21) {
        getRandomCard();
    } else {
        return "Not possible."
    }

    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    console.log(cards);
    rendertGame();
    drawCardSound();                                                                 //new card sound
};

function resetGame() {
    let gameRes = 0;
    cardsEl.textContent = "Cards: " + gameRes;
    sumEl.textContent = "Sum: " + gameRes;
    messageEl.textContent = "Want to play a round? 🃏";
};

function introducePlayer() {
    let playerName = prompt("Please, write your nickname below:");
    playerNameEl.textContent = "Hello, " + playerName + ". Welcome to the game!";
    introduceBtnEl.style.display = "none";
    playerEl.style.display = "block";
    gotMoney();
};

function getRandomCard() {
    let randomNumber =  Math.floor( Math.random() * 13 ) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else { 
        return randomNumber;
    };
};

function blackJackWin() {
    playerEl.textContent = "Now you have: " + playerChips + " $";
    return playerChips += 50; 
};

function blackJackLoose() {
    playerEl.textContent = "Now you have: " + playerChips + " $";

    return playerChips -= 10;
};

function timesPlayed() {
    console.log(gamesPlayed += 1);
};

function playAudio() {
    startSound.play()
};

function playBlackjackAudio()  {
    gotBlackjackSound.play()
};

function drawCardSound()  {
    drawMoreCards.play()
};

// still not implemented as a function
// if (playerChips === 0) {
//     startGameBtnEl.style.display = 'none';
//     newCardBtnEl.style.display = 'none';
//     playerNameEl.textContent = `${playerName}, you ran out of chips. Game over!`
// };