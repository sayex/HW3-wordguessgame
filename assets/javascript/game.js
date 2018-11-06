var words = ["battleship", "chess"];
var wordArray = [];
var wordHidden = [];

var correctLetters = [];
var wrongGuessLetters = [];
var wordSelect = words[Math.floor(Math.random() * words.length)];

for (var i = 0; i < wordSelect.length; i++) {
  wordArray.push(wordSelect.charAt(i));
  wordHidden.push("_");
}

document.getElementById("wordGuess").innerHTML = wordHidden.join(" ");

document.onkeypress = function(event) {
  var storedLetter = event.key;

  for (var i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === storedLetter) {
      correctLetters.push(storedLetter);
      wordHidden.splice(i, 1, storedLetter);
      document.getElementById("wordGuess").innerHTML = wordHidden.join(" ");
    }

    // else if (isInWord == false) {
    //   wrongGuessLetters.push(storedLetter);
    //   document.getElementById(
    //     "guessedLetters"
    //   ).innerHTML = wrongGuessLetters.join(" ");
    //   console.log(isInWord);
    // }
  }
};
