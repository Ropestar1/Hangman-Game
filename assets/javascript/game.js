//Initial text to start game (clean start)
var startText = "Game on!";
var instructionText = "Instructions"

//Initial global arrays and variables. Resets at game over.
var arrWordBank = ["piggy", "hello", "world"];
//var arrLetterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrWrongLetters = [];
var arrCorrectLetters = [];

var selectedWord = "";
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
	document.onkeyup = function gameStartText() {
		//console.log(event.key);
		var startInsert = document.getElementById("starter");
		startInsert.innerHTML = startText;

		//add code to change visibility of instructions
	}

	guessCount = guessCountInitial; 
	console.log("guessCount", guessCount);

	selectedWord = arrWordBank[0]; //make this random later
	console.log(selectedWord);
}

function gamePlay() {
	//fix below code to register variable
	document.onkeyup = function playing() {
		var userGuess = event.key;

		for (var i = 0; i < selectedWord.length; i++) {
			
		}
	}
	//userGuess check against the selected word
}

//conditionals
if (winCount === 0 && lossCount === 0 && guessCount === 0){
	gameStart();
}	

else if (arrWrongLetters.length === 0 && arrCorrectLetters.length === 0 && guessCount ===  guessCountInitial) {
	gamePlay();
}










