//Initial text to start game (clean start)
var startText = "Game on!";
var correctLetters = "";

//Initial global arrays and variables. Resets at game over.
var arrWordBank = ["castles", "hello", "world", "building", "crying", "sleepless", "tired"];
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
	guessCountLeft = guessCountInitial - arrWrongLetters.length;
	
	var guessesLeftInsert = document.getElementById("guesses-left");
	guessesLeftInsert.innerHTML = guessCountLeft;
}

function reset() {

}

function underscore() {
	//work out conditions for underscoring
	if (winCount === 0 && lossCount === 0 && guessCountLeft === 6 && selectedWord.length === 0) {

		selectedWord = arrWordBank[Math.floor(Math.random() * arrWordBank.length)]; //MAKE THIS RANDOM!!!!!

		for (var i = 0; i < selectedWord.length; i++) {
		arrCorrectLetters.push(placeholder);
		}
	}
}

function display() {
	var displayLetters = document.getElementById("correct-letters");
	displayLetters.innerHTML = arrCorrectLetters.join(" "); // check
}

function gameStart() {
	document.onkeydown = function gameStartText(event) {
		underscore();
		display();

		var startInsert = document.getElementById("starter");
		startInsert.innerHTML = startText;		
	}
}


function gamePlay() {
	//fix below code to register variable
	document.onkeyup = function letterTracker(event) {
		userGuess = event.key.toLowerCase();//add the lowercase function here
		console.log("userGuess", userGuess);

		//gameplay code below
		if (selectedWord.length > 0) {//looking if a word has been picked
			if (selectedWord.indexOf(userGuess) === -1) {
					arrWrongLetters.push(userGuess);
			}

			else if (selectedWord.indexOf(userGuess) >= 0) { //if correct letter entered
				for (var i = 0; i < selectedWord.length; i++) {
					if (userGuess === selectedWord[i]) {
						arrCorrectLetters[i] = userGuess;
						display();
					}
				}
			}
		}

		ticker();
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
if (winCount === 0 && lossCount === 0 && guessCountLeft === 6 && selectedWord.length === 0) {
	gameStart();
}

//YOU WIN - RESET
// else if () {

// }

//YOU LOSE - RESET
// else if () {

// }

gamePlay()

//console.log() testing below
// console.log(arrCorrectLetters)