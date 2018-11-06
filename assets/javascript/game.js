var words = ["battleship", "chess"];
var wordarray = [];
var wordhidden = [];
var correctLetters = [];
var wrongGuessLetters = [];
var wordSelect = words[Math.floor(Math.random() * words.length)];

for (var i = 0; i < wordSelect.length; i++) {
  wordarray.push(wordSelect.charAt(i));
  wordhidden.push("_");
}
console.log(wordhidden);
document.getElementById("wordGuess").innerHTML = wordhidden.join(" ");

document.onkeypress = function(event) {
  var storedLetter = event.key;
  console.log(storedLetter);

  for (var i = 0; i < wordarray.length; i++) {
    if (wordarray[i] === storedLetter) {
      correctLetters.push(storedLetter);
      console.log("correct Letter " + correctLetters);
    }
  }
};
