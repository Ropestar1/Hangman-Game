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

//removes duplications in array
var wrongLetterDisplay = console.log(arrWrongLetters.filter( (el, i, arr) => arr.indexOf(el) === i));
var guessReducer = arrWrongLetters.filter( (el, i, arr) => arr.indexOf(el) === i).length;

var selectedWord = "";
var placeholder = "_"; //insert into selectedWord x times
var userGuess = "";

var winCount = 0;
var lossCount = 0;
var guessCountInitial = 6;
var guessCountLeft = guessCountInitial;

//function definitions
function ticker() {
	guessCountLeft = guessCountInitial - wrongLetterDisplay.length; 
}

function gameStart() {
	document.onkeydown = function gameStartText(event) {
		//console.log(event.key);
		var startInsert = document.getElementById("starter");
		startInsert.innerHTML = startText;

		//add code to change visibility of instructions. See index.html
	}

	selectedWord = arrWordBank[0]; //make this random later
	//console.log(selectedWord);	

	//puts letters and underscores into array
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
		userGuess = event.key.toLowerCase();//add the lowercase function here
		console.log("userGuess", userGuess);

		//removes duplications in array
		arrCorrectLetters.filter( (el, i, arr) => arr.indexOf(el) === i);

		//gameplay code below
		if (arrSelectedWordLetters.length > 0) {//looking if a word has been chosen
			for (var i = 0; i < arrSelectedWordLetters.length; i++) {
				if (userGuess === arrSelectedWordLetters[i]) { //if correct letter entered
					arrSelectedWordBlanks[i] = userGuess; //replace placeholder with letter
					arrCorrectLetters.push(userGuess);
				}
				else {
					arrWrongLetters.push(userGuess);
				}
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
if (guessReducer > 6) {//maybe use this as when
	//add code to display game over, press any key to continue
	gameStart();
}

else if	(winCount === 0 && lossCount === 0 && guessCountLeft === 6) {
	gameStart();
	gamePlay();
}	

else if (arrWrongLetters.length === 0 && arrCorrectLetters.length === 0 && guessCountLeft === 0) {
	gamePlay();
}

//console.log testing:
//console.log(arrSelectedWordBlanks);