var words = [
  "battleship",
  "chess",
  "blockade",
  "checkers",
  "go",
  "camelot",
  "risk",
  "onyx",
  "simon",
  "stratego",
  "patchwork",
  "doom",
  "monopoly",
  "clue",
  "mahjong",
  "pictionary",
  "ra",
  "rummikub",
  "sorry",
  "totopoly",
  "trouble",
  "yahtzee"
];
var wordArray = [];
var wordHidden = [];
var score = 0;
var wrongGuessedLetters = [];
var wordSelect = 0;
var isInWord = false;
var NumberOfGuesses = 10;
var gameStared = false;

function hidegame() {
  document.getElementById("game").style.display = "none";
}

function unhidegame() {
  document.getElementById("game").style.display = "";
}

function selectword() {
  wordSelect = words[Math.floor(Math.random() * words.length)];
  for (var i = 0; i < wordSelect.length; i++) {
    wordArray.push(wordSelect.charAt(i));
    wordHidden.push("_");
  }
  document.getElementById("wordGuess").innerHTML = wordHidden.join(" ");
}

function wrongletter() {
  NumberOfGuesses--;
  writeToScreen();
  if (NumberOfGuesses === 0) {
    setTimeout(function() {
      alert("Good try. Word was " + "'" + wordSelect + "'");
      newgame();
    }, 1);
  }
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
  document.getElementById("wordGuess").innerHTML = wordHidden.join(" ");
  document.getElementById(
    "guessedLetters"
  ).innerHTML = wrongGuessedLetters.join(" ");
  document.getElementById("score").innerHTML = score;
  document.getElementById("guessLeft").innerHTML = NumberOfGuesses;
}

function winner() {
  score++;
  alert("You're such a smarty!");
  newgame();
}

function game() {
  document.onkeypress = function(event) {
    var storedLetter = event.key.toLocaleLowerCase();

    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === storedLetter) {
        wordHidden.splice(i, 1, storedLetter);
        writeToScreen();
        isInWord = true;
      }
    }

    if (isInWord === false) {
      wrongGuessedLetters.push(storedLetter);
      wrongletter();
    }
    isInWord = false;

    if (wordHidden.indexOf("_") === -1) {
      wordHidden.splice(i, 1, storedLetter);
      setTimeout(function() {
        winner();
      }, 1);
    }
  };
}

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
