//words as object

var objectOfWords = {
  battleship: "assets/images/battleship.jpg",
  chess: "assets/images/chess.jpeg",
  blockade: "assets/images/blockade.jpg",
  checkers: "assets/images/checkers.jpg",
  go: "assets/images/go.jpg",
  camelot: "assets/images/camelot.jpg",
  risk: "assets/images/risk.jpg",
  onyx: "assets/images/onyx.png",
  simon: "assets/images/simpn.jpg",
  stratego: "assets/images/stratego.jpg",
  patchwork: "assets/images/patchwork.jpg",
  doom: "assets/images/doom.png",
  monopoly: "assets/images/monopoly.jpg",
  clue: "assets/images/clue.jpg",
  mahjong: "assets/images/mahjong.jpg",
  pictionary: "assets/images/pictionary.jpg",
  ra: "assets/images/ra.jpg",
  rummikub: "assets/images/clue.jpg",
  sorry: "assets/images/sorry.jpg",
  totopoly: "assets/images/totopoly.jpg",
  trouble: "assets/images/trouble.jpg",
  yahtzee: "assets/images/yahtzee.jpg",
  "chutes and ladders": "assets/images/chootsandladders.jpg",
  "connect four": "assets/images/connectfour.jpg",
  "cross and circle game": "assets/images/crossandcircle.jpg",
  scrabble: "assets/images/scrabble.jpg",
  "thirteen dead end drive": "assets/images/thirteenDDD.jpg",
  "logo board game": "assets/images/logo.jpg",
  "the game of life": "assets/images/life.jpg",
  "scene it": "assets/images/sceneit.jpg",
  "mouse trap": "assets/images/mousetrap.jpg",
  "hungry hungery hippos": "assets/images/hungryhungryhippos.jpg",
  "dont wake daddy": "assets/images/dontwakedaddy.jpg",
  upwords: "assets/images/upwords.jpg",
  "axis and alies": "assets/images/axisandalies.jpg",
  "the farming game": "assets/images/thefarminggame.jpg"
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

//hide game function for start up

function hidegame() {
  document.getElementById("game").style.display = "none";
}

// function unhide game after any key is pressed

function unhidegame() {
  document.getElementById("game").style.display = "";
}

// function to find a word for the game and prepair/write it for the screen

function selectword() {
  ObjectsIntoArray = Object.keys(objectOfWords);
  wordSelect =
    ObjectsIntoArray[Math.floor(Math.random() * ObjectsIntoArray.length)];
  img = objectOfWords[wordSelect];
  for (var i = 0; i < wordSelect.length; i++) {
    wordArray.push(wordSelect.charAt(i).toUpperCase());
    wordHidden.push("_");
    if (wordSelect.charAt(i) === " ") {
      wordHidden.splice(i, 1, wordSelect.charAt(i));
    }
  }
  writeToScreen();
}

//when a wrong letter is pressed

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

// clear var, reset screen, selected new word

function newgame() {
  wordSelect = 0;
  wordArray = [];
  wordHidden = [];
  wrongGuessedLetters = [];
  NumberOfGuesses = 10;
  selectword();
  writeToScreen();
}

//update screen with changes during game play

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

// when user gueses word correctly

function winner() {
  score++;
  document.getElementById("wordImg").style.display = "";
  setTimeout(function() {
    alert("You're such a smarty!");
    newgame();
  }, 10);
}

//when a letter is typed check to see if its in the word or if not

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

// Listener for pressed letters

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
