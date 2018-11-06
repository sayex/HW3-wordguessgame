var words = ["battleship", "chess"];
var wordArray = [];
var wordHidden = [];

var correctLetters = [];
var wrongGuessLetters = [];
var wordSelect = words[Math.floor(Math.random() * words.length)];
var isInWord = false;
var NumberOfGuesses = 10;
for (var i = 0; i < wordSelect.length; i++) {
  wordArray.push(wordSelect.charAt(i));
  wordHidden.push("_");
}

document.getElementById("wordGuess").innerHTML = wordHidden.join(" ");

function wrongletter() {
  document.getElementById("guessedLetters").innerHTML = wrongGuessLetters.join(
    " "
  );
  NumberOfGuesses--;
  document.getElementById("guessLeft").innerHTML = NumberOfGuesses;
}

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
