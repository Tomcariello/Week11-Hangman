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

		//get a random word from the array
		var randomNumber = Math.floor(Math.random() * this.wordBank.length);

		var tempWord = wordFile.WordConstructor(this.wordBank[randomNumber]);

		//populate currentWord object with letters
		console.log("TW is " + tempWord);
		// this.currentWord = "something";

		// this.keepPromptingUser();

	}, 
	resetGuessesRemaining : function(){
    	// reset guess count for new game
    	this.guessesRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
			console.log("You chose " + JSON.stringify(result));

		    //if the letter was found set that specific letter in the word to "found"

		    //if the user guessed incorrectly decrement guessesremaining & console.log if they were incorrect or correct
		    	
			//check if you win only when you are right

        //end game
			 
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
