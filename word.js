// require your letter objects
var letter = require('./letter.js');

//populate currentWord (made from Word constructor function) object with letters

exports.WordConstructor = function(wordToProcess){
	console.log("in the word function " + wordToProcess.length);

	for (var i = 0; i < wordToProcess.length; i++) {
		console.log(wordToProcess[i]);
		var tempLetter = new letter.LetterObjectCreator(wordToProcess[i], false, "_");
		console.log(tempLetter);
		//create object for this letter
		//push object to array
		//return array to GAME object
	}


	return wordToProcess;
	// property to store the string word

}

// export to use in main.js
