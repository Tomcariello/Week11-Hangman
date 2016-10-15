//Initialize variables
var wordBeingPlayed = "";
var currentWord;
var guesses = 0;
var totalMatchedGuesses = 0;


var inquirer = require('inquirer');
var word = require('./word.js');
var chooseWord = require('./game.js');


function startGame() {
	//  Randomly select word for game from array
	currentWord = chooseWord.selectWord();

	// Build object(?); alphabet, letter in word (Y/N), guessed (Y/N), display character (letter/_), 
	for (i = 0; i < currentWord.length; i++) {
	  if (currentWord[i] == " ") {
	    wordBeingPlayed += "   "; 
	  } else {
	    wordBeingPlayed += "_";
	  }
	}
	getGuess();
}

function getGuess() {
	console.log("The word being played is " + currentWord);
	console.log("====================");
	console.log(wordBeingPlayed);
	console.log("====================");
	//Prompt user to provide their guess
	inquirer.prompt([/* Pass your questions in here */
		{
		    type: 'input',
		    name: 'guess',
		    message: 'Choose a letter:',
		}
		]).then(function (answers) {
		    // console.log("You guessed " + answers.guess);
	    	// word.processGuess(answers.guess,currentWord);
		    if (word.processGuess(answers.guess) == false) {
				console.log("Maybe try a letter...?")
				getGuess();
			} else {
				// console.log("it's a letter! passing to checkAlreadyGuessed...")
				checkAlreadyGuessed(answers.guess);
			}
	});
}

function checkAlreadyGuessed(guess) {
	// console.log("continuing the train...");
	if (word.alreadyGuessed(guess) == true)  {
		console.log("You already guessed that. Try again.")
		getGuess();
	} else {
		// console.log("This letter has not been guessed yet.")
		checkWord(guess);
	}
}

function checkWord(guess) {
	wordBeingPlayed = word.checkAgainstWord(guess,currentWord,wordBeingPlayed);
	// console.log("returned in checkword" + wordBeingPlayed);
	getGuess();
}



function printLetters() {
	for (i = 0; i < lettersGuessed.length; i++) {
		if (i == 0) {
			document.getElementById("usedletters").innerHTML = lettersGuessed[i];	
		} else {
		document.getElementById("usedletters").innerHTML += ", " + lettersGuessed[i];
	}
	}
}

function wordComplete() {
	for (i=0; i < wordBeingPlayed.length; i++) {
		if (wordBeingPlayed[i] == "_") {
			return;
		} 
	}
	playerWins++;
	updateScoreboard("win");
}

function updateScoreboard(gameStatus) {
	if (gameStatus == "win") {
		alert("You win!");
	} else if (gameStatus == "lose") {
		alert("You lose!");
	}
}


 startGame();
