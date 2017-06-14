//opening codes to start-initialize the game
//Initial arrays and variables. Resets at game over.
var arrSelectedWord = ["piggy"];
var arrLetterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrWrongLetters = [];
var arrCorrectLetters = [];

var winCount = 0;
var lossCount = 0;
var guessCount = 0;

console.log("arrSelectedWord", arrSelectedWord);
console.log("arrGuessedWord", arrGuessedLetters);
console.log("arrWrongLetters", arrWrongLetters);
console.log("arrCorrectedLetters", arrCorrectLetters);
console.log("winCount", winCount);
console.log("lossCount", lossCount);
console.log("guessCount", guessCount);


//document.getElementById("starter").onkeypress = function() {gameStart()};
if (winCount === 0 && lossCount === 0 && guessCount === 0){
	document.onkeyup = function gameStart() {
		console.log(event.key);

		var startText = document.getElementById("starter");
		startText.innerHTML = "Game on!";
		}

else if ()
}