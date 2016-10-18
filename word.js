// require your letter objects
var letter = require('./letter.js');

//populate currentWord (made from Word constructor function) object with letters

// export to use in main.js
exports.WordConstructor = function(wordToProcess){

	// declare array to contain the letter objects
	var letterObjectArray = [];

	//loop through the word being played & send each letter to LetterObjectCreator for object creation
	for (var i = 0; i < wordToProcess.length; i++) {
		var tempLetter = new letter.LetterObjectCreator(wordToProcess[i], false, "_");
		letterObjectArray.push(tempLetter);
	}

	//send the object array back to the game.js
	return letterObjectArray;

}


