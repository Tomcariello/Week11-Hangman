//Initialize variables
var wordBeingPlayed = "";
var currentWord;
var guesses = 0;
var totalMatchedGuesses = 0;
var lettersGuessed = [];


var inquirer = require('inquirer');
var word = require('./word.js');
var chooseWord = require('./game.js');


function startGame() {
	//  Randomly select word for game from array
	var currentWord = chooseWord.selectWord();

	// Build word with underscores to indicate word length
	for (i = 0; i < currentWord.length; i++) {
	  if (currentWord[i] == " ") {
	    wordBeingPlayed += "   "; 
	  } else {
	    wordBeingPlayed += "_ ";
	  }
	}
	console.log("The word being played is " + currentWord);
	console.log("====================");
	console.log(wordBeingPlayed);
	console.log("====================");
	getGuess();
}

function getGuess() {
	//Prompt user to provide their guess
	inquirer.prompt([/* Pass your questions in here */
	  {
	    type: 'input',
	    name: 'guess',
	    message: 'Choose a letter:',
	  }
	  ]).then(function (answers) {
	      console.log("You guessed " + answers.guess);
	      word.processGuess(answers.guess);
	});
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
