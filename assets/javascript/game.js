var words = ["battleship", "chess"];
var wordarray = [];
var guessedLetters = [];
var correctLetters = [];
var wrongGuessLetters = [];
var wordSelect = words[Math.floor(Math.random() * words.length)];

function updateword() {
  document.getElementById("wordGuess").innerHTML = wordSelect;
}

for (var i = 0; i < wordSelect.length; i++) {
  wordarray.push(wordSelect.charAt(i));
}

document.onkeypress = function(event) {
  var storedLetter = String.fromCharCode(event.key).toLowerCase();
  guessedLetters.push(event.key);
  console.log(guessedLetters);
};

console.log(wordarray);
