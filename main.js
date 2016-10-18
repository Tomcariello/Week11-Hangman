//Initialize variables
var wordBeingPlayed = "";
// var currentWord;
var guesses = 0;
var totalMatchedGuesses = 0;

var prompt = require('prompt');
var wordFile = require('./word.js');
var chooseWord = require('./game.js');

prompt.start();

game = {
	wordBank : chooseWord.game.words,
	wordsWon : 0, // count of words Found
	guessesRemaining : 10, //per word
	currentWord : null, //the word object
	startGame : function (word){
		//make sure the user has 10 guesses
		this.guessesRemaining = 10;
		this.guessedLetters = [];
		this.currentWord = "";

		//get a random word from the array
		var randomNumber = Math.floor(Math.random() * this.wordBank.length);

		//send word to WordConstructor and populate currentWord with an array of letter objects
		this.currentWord = wordFile.WordConstructor(this.wordBank[randomNumber]);

		console.log(JSON.stringify(this.currentWord[0].letter));

		this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
    	// reset guess count for new game
    	this.guessesRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {

			var decrementGuesses = true;

			//loop through letter objects and update each one
			for (var i = 0; i < self.currentWord.length; i++) {
				if (result.guessLetter == self.currentWord[i].letter) {
					//update object
					self.currentWord[i].status = true;
					self.currentWord[i].display = self.currentWord[i].letter;
					decrementGuesses = false;
				}
			}

			//if guessed incorrectly decrement guessesremaining & console.log if they were incorrect or correct
			if (decrementGuesses == true) {
				self.guessesremaining--;
				console.log("Too bad, '" + result.guessLetter + "'' is not in this word.");
			} else {
				console.log("Good guess, '" + result.guessLetter + "'' is in this word!");
				//check if you win only when you are right
				//end game ?
			}
			
			//push the letter into the guessedLetters array
			self.guessedLetters.push(result.guessLetter);

	
			 
		    // display the user how many guesses remaining
			
			// render the word 
				
			// display letters the user has guessed

			// if user has remaining guesses and Word isn't found
			
			// if user has no guesses left, show them the word and tell them they lost
			
			// else show the user word and rendered
		    
		});
	}


};

game.startGame();
