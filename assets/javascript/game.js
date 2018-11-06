var words = ["battleship", "chess"];
var wordArray = [];
var wordHidden = [];
var correctLetters = [];
var wrongGuessLetters = [];
var wordSelect = words[Math.floor(Math.random() * words.length)];

//

// for (var i = 0; i < wordSelect.length; i++) {
//   wordArray.push(wordSelect.charAt(i));
//   // wordHidden.push("_");
// }

document.getElementById("wordGuess").innerHTML = "word Select";

// document.onkeypress = function(event) {
//   var storedLetter = event.key;
//   console.log(storedLetter);

//   for (var i = 0; i < wordArray.length; i++) {
//     if (wordArray[i] === storedLetter) {
//       correctLetters.push(storedLetter);
//     }
//   }
// };
