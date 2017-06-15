//Initial text to start game (clean start)
var startText = "Game on!";
var instructionText = "Instructions";

//Initial global arrays and variables. Resets at game over.
var arrWordBank = ["castles", "hello", "world", "building", "crying", "sleepless", "tired"];
//var arrLetterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrWrongLetters = [];
var arrCorrectLetters = [];

var selectedWord = "";
var placeholder = "_"; //insert into selectedWord x times
var userGuess = "";

var winCount = 0;
var lossCount = 0;
var guessCountInitial = 6;
var guessCountLeft = guessCountInitial;
var guessReducer = 0;

//function definitions
function ticker() {
	guessCountLeft = guessCountInitial - wrongLetterDisplay.length; 
}

//removes duplications in arrays
function arrayCleaner() {
	arrWrongLetters.filter( (el, i, arr) => arr.indexOf(el) === i);//not working?
	guessReducer = arrWrongLetters.filter( (el, i, arr) => arr.indexOf(el) === i).length + 1;//works
	//corrects missing first key not counted at initialization, but what about a reset??????? should it be removed?
}

function gameStart() {
	document.onkeyup = function gameStartText(event) {
		//console.log(event.key);
		var startInsert = document.getElementById("starter");
		startInsert.innerHTML = startText;

		//add code to change visibility of instructions. See index.html
	}

	selectedWord = arrWordBank[0]; //make this random later
	//console.log(selectedWord);	

	//puts letters and underscores into array
	for (var i = 0; i < selectedWord.length; i++) {
		arrCorrectLetters.push(placeholder);//works: pushes underscores to array
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

		//removes duplications in array - SEEMS TO BE BROKEN
		arrayCleaner();

		//gameplay code below
		if (selectedWord.length > 0) {//looking if a word has been chosen
			for (var i = 0; i < selectedWord.length; i++) {
				if (userGuess === selectedWord[i]) { //if correct letter entered
					arrCorrectLetters[i] = userGuess; //replace placeholder with letter
				}
				else { //HOW DO I PREVENT CORRECT LETTERS FROM GETTING THROWN INTO THE WRONG LETTERS?
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
// if (guessReducer > 5) {
// 	//add html code to display YOU LOSE, press any key to continue
// 	gameStart();
// 	//add a game reset function
// }

// else if (winCount >= 0 && lossCount >= 0 && guessReducer < 6) {
// 	gamePlay();
// }

//FIND THE CORRECT CONDITIONS TO START AND PLAY GAME!!!!!
if (winCount === 0 && lossCount === 0 && guessCountLeft === 6) {
	gameStart();
	gamePlay();
}	

else if (arrWrongLetters.length === 0 && selectedWord.length === 0 && guessCountLeft === 0) {
	gamePlay();
}

//console.log() testing below
// console.log(arrCorrectLetters)