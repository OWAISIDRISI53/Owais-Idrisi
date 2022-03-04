let userGuess = [];
let compGuess = Math.round(Math.random() * 100)

let welcomeScreen = document.querySelector(".welcomeScreen")
let gameScreen = document.querySelector(".game-sec")

let input = document.querySelector('.input');
let output = document.querySelector('#output')

let gameNewBtn = document.querySelector('#new-game');
let prevGuess = document.querySelector('.guesses');
let attempt = document.querySelector('.attempt')

let music = new Audio('/music.wav');

function easy() {
  maxGuess = 10;
  start();
}

function hard() {
  maxGuess = 5;
  start();
}

function extreme() {
  maxGuess = 2;
  start();
}

function start(e) {
  music.play()
  welcomeScreen.style.display = 'none'
  gameScreen.style.display = 'flex'
}

function reStart() {
  music.play()
  location.reload()
}

function compare() {
  music.play()
  userGuess = [...userGuess, input.value];
  prevGuess.textContent = userGuess;

  if (userGuess.length < maxGuess) {
    if (compGuess > input.value) {
      output.textContent = `Your guess is Low 😟 `
    }
    else if (compGuess < input.value) {
      output.textContent = `Your guess is High 😲 `
    }

    else {
      output.textContent = `It's Correct😀`
      gameNewBtn.style.display = 'block';
      input.disabled = true;
    }

  } 
  else {
    
    if (compGuess > input.value) {
      output.textContent = `You Loose!! Correct number was ${compGuess} `
    }
    else if (compGuess < input.value) {
      output.textContent = `You Loose!! Correct number was ${compGuess} `
    }

    else {
      output.textContent = `It's Correct😀`
      gameNewBtn.style.display = 'block';
    }
    
    input.disabled = true;
    gameNewBtn.style.display = 'block';
  }

  attempt.textContent = userGuess.length;
  input.value = ''
}
