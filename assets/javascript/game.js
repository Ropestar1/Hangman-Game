//Initial text to start game (clean start)
var startText = "Game on!";
var instructionText = "Instructions"

//Initial global arrays and variables. Resets at game over.
var arrWordBank = ["castles", "hello", "world"];
var arrSelectedWordLetters = []; //houses letters to avoid duplication;
//var arrLetterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrWrongLetters = [];
var arrCorrectLetters = [];
var arrSelectedWordBlanks = [];

var selectedWord = "";
var placeholder = "_"; //insert into selectedWord x times
var winCount = 0;
var lossCount = 0;
var guessCount = 0;
var guessCountInitial = 6; //allows programmer to change if needed in one location

//function definitions
function gameStart() {
	document.onkeydown = function gameStartText(event) {//can I leave event out of the argument, so it's just blank?
		//console.log(event.key);
		var startInsert = document.getElementById("starter");
		startInsert.innerHTML = startText;

		//add code to change visibility of instructions. See index.html
	}

	guessCount = guessCountInitial; 
	console.log("guessCount", guessCount);

	selectedWord = arrWordBank[0]; //make this random later
	console.log(selectedWord);	

	//puts letters into an array to check for duplication
	for (var i = 0; i < selectedWord.length; i++) {
		arrSelectedWordBlanks.push(placeholder);//works: pushes underscores to array

		arrSelectedWordLetters.push(selectedWord[i]);
	}

	//check if letters are duplicated
	// for (var j = 0; j < selectedWordLetters.length; i++) {
	// 	if (selectedWord[j] === selectedWordLetters[i]) {
	// 	}
		
	// 	else {

	// 	}
	// }
	
}

function gamePlay() {
	//fix below code to register variable
	document.onkeyup = function letterTracker(event) {
		var userGuess = event.key.toLowerCase();//add the lowercase function here
		console.log("userGuess", userGuess);

		if (arrSelectedWordLetters.length === 0) {
			gameStart();
		}

		else if (arrSelectedWordLetters.length > 0) {
			for (var i = 0; i < arrSelectedWordLetters.length; i++) {
				if (userGuess === arrSelectedWordLetters[i]) {
				arrCorrectLetters.push(userGuess); //DOUBLE CHECK IT GOES WHERE I WANT IT TO.
				}
				else (user)//START ON THIS CODE!!!
			}
		}

		//rethink below code?
		//userGuess checks against the selected word
		// for (var i = 0; i < selectedWord.length; i++) {
		// 	if (userGuess === selectedWord[i]) {//how do I get it to stop at first occurrence
		// 		arrCorrectLetters.push(userGuess); 
		// 		//find a way to organize letters to show correct order
		// 			}
		// 		}
		// 	}
		// 	else if {
		// 		arrWrongLetters.push(userGuess);
		// 	}
		// 	else if {
		// 	}
			
		// }
	}
	
}



//conditionals
if (winCount === 0 && lossCount === 0 && guessCount === 0){
	gameStart();
}	

else if (arrWrongLetters.length === 0 && arrCorrectLetters.length === 0 && guessCount ===  guessCountInitial) {
	gamePlay();
}

//console.log testing:
console.log(arrSelectedWordBlanks);