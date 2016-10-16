// require your letter objects
var letter = require('./letter.js');

//populate currentWord (made from Word constructor function) object with letters

exports.WordConstructor = function(wrd){
	console.log("in the word function " + wrd);
	// property to store the string word

	// a collection of letter objects
	var alphabet = function(value, guseed,display) {
		
	}


	// for (var i=0; i < wrd.length; i++) {
	// 	//iterate through the selected word & create objects for each letters' status
	// }

	this.getLetters = function() {
		// populate the collection above with new Letter objects
	}
	
	//found the current word
	this.didWeFindTheWord = function() {
		//sets this.found in the word object to true/false if all letter objects are TRUE in their appear property

		return this.found;
	}

	this.checkIfLetterFound = function(guessLetter) {

		// iterate through the collection of letter Objects

		// if guessLetter matches Letter property, the letter object should be shown
		return whatToReturn;
	};

	this.wordRender = function() {
		// render the word based on if letters are found or not found
		return wordString;
	};
}

// export to use in main.js
