
//Initial global arrays and variables. Resets at game over.
var alphabet = "abcdefghijklmnopqrstuvwyz"; //makes sure a letter is used for game tallies
var startText = "Game on!";
var resetText = "Press any key to start a new game."
var correctLetters = "";
var selectedWord = "";
var placeholder = "_";
var userGuess = "";

var arrWordBank = ["dragons", "castle", "fortress", "knights", "crying", "sleepless", "tired"];
var arrWrongLetters = [];
var arrCorrectLetters = [];

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
	//note to self: I'm running an innerHTML function on the element-by-id, and inserting a new value.
}

function underscore() {
	if (winCount === 0 && lossCount === 0 && guessCountLeft === 6 && selectedWord.length === 0) {

		selectedWord = arrWordBank[Math.floor(Math.random() * arrWordBank.length)];

		for (var i = 0; i < selectedWord.length; i++) {
		arrCorrectLetters.push(placeholder);
		}
	}
}

function display() {
	var displayLetters = document.getElementById("correct-letters");
	displayLetters.innerHTML = arrCorrectLetters.join(" ").toUpperCase();
}

function gameStart() {
	document.onkeydown = function gameStartText(event) {
		underscore();
		display();

		var startInsert = document.getElementById("starter");
		startInsert.innerHTML = startText;
	}
}

function gameOverNotice() {
	if (arrCorrectLetters.join("") === selectedWord) {
 		alert("You win! Great job!");
 		winCount++;

 		var winInsert = document.getElementById("win-count");
 		winInsert.innerHTML = winCount;

 		reset();
	}

	else if (guessCountLeft === 0) {
		//need to fix because there is a +1 added; I can add one to display"cheat"
		alert("You lost!");
		lossCount++;

		var lossInsert = document.getElementById("loss-count");
 		lossInsert.innerHTML = lossCount;

 		reset();
	}
}

function gamePlay() {
	document.onkeyup = function letterTracker(event) {
		userGuess = event.key.toLowerCase();
		console.log("userGuess", userGuess);

		if (selectedWord.length > 0) {//looking if a word has been picked
			if (selectedWord.indexOf(userGuess) === -1 && alphabet.indexOf(userGuess) >= 0 && arrWrongLetters.indexOf(userGuess) === -1) {
				arrWrongLetters.push(userGuess);

				var displayWrongLetters = document.getElementById("wrong-letters");
				displayWrongLetters.innerHTML = arrWrongLetters.join(", ").toUpperCase();
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

		gameOverNotice();
		ticker();
	}
}

function reset() {
	arrWrongLetters = [];
	arrCorrectLetters = [];

	selectedWord = arrWordBank[Math.floor(Math.random() * arrWordBank.length)];
	for (var i = 0; i < selectedWord.length; i++) {
		arrCorrectLetters.push(placeholder);
	}

	var guessCountInitial = 6;

	var resetInsert = document.getElementById("starter");
	resetInsert.innerHTML = resetText;

	var resetWrongLetters = document.getElementById("wrong-letters");
	resetWrongLetters.innerHTML = " ";

	guessReducer = 0;

	display();
}

if (winCount === 0 && lossCount === 0 && guessCountLeft === 6 && selectedWord.length === 0) {
	gameStart();
}

gamePlay()