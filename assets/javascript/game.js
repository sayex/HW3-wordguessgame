var words = ["battleship", "chess"];
var wordArray = [];
var wordHidden = [];
var correctLetters = [];
var wrongGuessLetters = [];
var wordSelect = 0;
var isInWord = false;
var NumberOfGuesses = 10;
var gameStared = false;

function hidegame() {
  document.getElementById("game").style.display = "none";
}

hidegame();

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
}

function game() {
  document.onkeypress = function(event) {
    var storedLetter = event.key;
    for (var i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === storedLetter) {
        correctLetters.push(storedLetter);
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
  };
}

function runGame() {
  if (gameStared === true) {
    selectword();
    game();
  }
}

function setGameToStart() {
  gameStared = true;
}
document.onkeypress = function(event) {
  document.getElementById("anyKey").style.display = "none";
  setGameToStart();
  runGame();
  unhidegame();
};
