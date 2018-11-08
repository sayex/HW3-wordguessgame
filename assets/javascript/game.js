//set my var

var words = ["battleship", "chess"];
var wordArray = [];
var wordHidden = [];
var score = 0;
var wrongGuessLetters = [];
var wordSelect = 0;
var isInWord = false;
var NumberOfGuesses = 10;
var gameStared = false;

// set my functions

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
  document.getElementById("guessedLetters").innerHTML = wrongGuessLetters.join(
    " "
  );
  NumberOfGuesses--;
  document.getElementById("guessLeft").innerHTML = NumberOfGuesses;
  if (NumberOfGuesses === 0) {
    alert("Yuo Loose. Word was " + wordSelect);
    newgame();
  }
}

function newgame() {
  wordSelect = 0;
  wordArray = [];
  wordHidden = [];
  wrongGuessLetters = [];
  document.getElementById("guessedLetters").innerHTML = wrongGuessLetters.join(
    " "
  );
  NumberOfGuesses = 10;
  document.getElementById("score").innerHTML = score;
  document.getElementById("guessLeft").innerHTML = NumberOfGuesses;
  selectword();
}

function game() {
  document.onkeypress = function(event) {
    var storedLetter = event.key.toLocaleLowerCase();

    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === storedLetter) {
        wordHidden.splice(i, 1, storedLetter);
        document.getElementById("wordGuess").innerHTML = wordHidden.join(" ");
        isInWord = true;
      }
    }

    if (isInWord === false) {
      wrongGuessLetters.push(storedLetter);
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

// code when page loads and when to start game

function winner() {
  score++;
  alert("You Win!");
  newgame();
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
