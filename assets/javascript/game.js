//opening codes to start-initialize the game
//Initial global arrays and variables. Resets at game over.
var startText = "Game on!";

var arrWordBank = ["piggy", "hello", "world"];
//var arrLetterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrWrongLetters = [];
var arrCorrectLetters = [];

var selectedWord = arrWordBank[0]; //make this random later
var winCount = 0;
var lossCount = 0;
var guessCount = 0;
var guessCountInitial = 7; //come back and set to factor depending on word

console.log("arrWordBank", arrWordBank);
//console.log("arrLetterBank", arrLetterBank);
console.log("arrWrongLetters", arrWrongLetters);
console.log("arrCorrectedLetters", arrCorrectLetters);

console.log("selectedWord", selectedWord);
console.log("winCount", winCount);
console.log("lossCount", lossCount);
console.log("guessCount", guessCount);

//function definitions
function gameStart() {
	document.onkeyup = function gameStart() {
		//console.log(event.key);
		var startInsert = document.getElementById("starter");
		startInsert.innerHTML = startText;
		}

	guessCount = guessCountInitial; 
	console.log("guessCount", guessCount);
}

function gamePlay() {
	var userGuess = prompt("Guess a letter.");
	//userGuess check against the selected word
}

//conditionals
if (winCount === 0 && lossCount === 0 && guessCount === 0){
	gameStart();
}		

else if (arrWrongLetters.length === 0 && arrCorrectLetters.length === 0 && guessCount ===  guessCountInitial) {
	gamePlay();
}










