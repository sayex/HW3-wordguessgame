//testing changing to object to store words

var objectOfWords = {
  battleship: "assets/images/battleship.jpg",
  chess: "assets/images/chess.jpeg",
  blockade: "",
  checkers: "",
  go: "",
  camelot: "",
  risk: "",
  onyx: "",
  simon: "",
  stratego: "",
  patchwork: "",
  doom: "",
  monopoly: "",
  clue: "",
  mahjong: "",
  pictionary: "",
  ra: "",
  rummikub: "",
  sorry: "",
  totopoly: "",
  trouble: "",
  yahtzee: "",
  "chutes and ladders": "assets/images/chess.jpeg",
  "connect four": "",
  "cross and circle game": "",
  scrabble: "",
  "thirteen dead end drive": "",
  "logo board game": "",
  "the game of life": "",
  "scene it": "",
  "mouse trap": "",
  "hungry hungery hippos": "",
  "dont wake daddy": "",
  upwords: "",
  "axis and alies": "",
  "the farming game": ""
};

var wordArray = [];
var wordHidden = [];
var score = 0;
var wrongGuessedLetters = [];
var wordSelect = 0;
var NumberOfGuesses = 10;
var gameStared = false;
var storedLetter;
var img;
var ObjectsIntoArray;

//all functions to run and update game

function hidegame() {
  document.getElementById("game").style.display = "none";
}

function unhidegame() {
  document.getElementById("game").style.display = "";
}

function selectword() {
  ObjectsIntoArray = Object.keys(objectOfWords);
  wordSelect =
    ObjectsIntoArray[Math.floor(Math.random() * ObjectsIntoArray.length)];
  wordSelect = wordSelect;
  img = objectOfWords[wordSelect];
  for (var i = 0; i < wordSelect.length; i++) {
    wordArray.push(wordSelect.charAt(i).toUpperCase());
    wordHidden.push("_");
  }
  for (var i = 0; i < wordSelect.length; i++) {
    if (wordSelect.charAt(i) === " ") {
      wordHidden.splice(i, 1, wordSelect.charAt(i));
    }
  }
  writeToScreen();
}

function wrongletter() {
  var isInWrongLetter = false;
  for (i = 0; i < wrongGuessedLetters.length; i++) {
    if (wrongGuessedLetters[i] === storedLetter) {
      isInWrongLetter = true;
    }
  }
  if (isInWrongLetter === false) {
    wrongGuessedLetters.push(storedLetter);
    NumberOfGuesses--;
    writeToScreen();
  }
  if (NumberOfGuesses === 0) {
    setTimeout(function() {
      alert("Good try. Word was " + "'" + wordSelect + "'");
      newgame();
    }, 1);
  }
  isInWrongLetter = false;
}

function newgame() {
  wordSelect = 0;
  wordArray = [];
  wordHidden = [];
  wrongGuessedLetters = [];
  NumberOfGuesses = 10;
  selectword();
  writeToScreen();
}

function writeToScreen() {
  document.getElementById("wordGuess").innerHTML = wordHidden.join("");
  document.getElementById(
    "guessedLetters"
  ).innerHTML = wrongGuessedLetters.join(" ");
  document.getElementById("score").innerHTML = score;
  document.getElementById("guessLeft").innerHTML = NumberOfGuesses;
  document.getElementById("wordImg").src = img;
  document.getElementById("wordImg").style.display = "none";
}

function winner() {
  score++;
  document.getElementById("wordImg").style.display = "";
  setTimeout(function() {
    alert("You're such a smarty!");
    newgame();
  }, 10);
}

function checkLetterToWord() {
  var isInWord = false;
  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === storedLetter) {
      wordHidden.splice(i, 1, storedLetter);
      writeToScreen();
      isInWord = true;
    }
  }
  if (isInWord === false) {
    wrongletter();
  }
  isInWord = false;

  if (wordHidden.indexOf("_") === -1) {
    wordHidden.splice(i, 1, storedLetter);
    winner();
  }
}

// Listenr for pressed letters

function game() {
  document.onkeypress = function(event) {
    storedLetter = event.key.toUpperCase();

    checkLetterToWord();
  };
}

//page load startup and key press listener

hidegame();
if (gameStared === false) {
  document.onkeypress = function(event) {
    document.getElementById("anyKey").style.display = "none";
    gameStared = true;
    selectword();
    unhidegame();
    game();
  };
}
