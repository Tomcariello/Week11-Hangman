// word.js contains the methods which check the letters versus the random word
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lettersGuessed = [];

module.exports = {
	processGuess: function(guess) {
		// console.log("Processing the guess ");
		//check letter is a-z
		for (i=0; i < alphabet.length; i++) {
			if (guess == alphabet[i]) {
				return(true);
			} 	
		}
		return(false);
	},

	alreadyGuessed: function(guess) {
	 	// console.log("Checking if letter is already guessed");
		//check if letter already guessed
		for (j=0; j <lettersGuessed.length; j++) {
			if (letter == lettersGuessed[j]) {
				return(true);
			} 
		}
		return(false)
	},

	checkAgainstWord: function(guess,currentWord,wordBeingPlayed) {
		// console.log("checking if " + guess + " is in word " + currentWord);
		
		var tempWordBeingPlayed = "";

		// Compare against word
		for (var i = 0; i < currentWord.length; i++) {
			
			if (guess == currentWord[i]) {
				tempWordBeingPlayed += guess;
			} else if (wordBeingPlayed[i] != "_") {
				tempWordBeingPlayed += wordBeingPlayed[i];
			} else {
				tempWordBeingPlayed += "_";
			}
			// console.log("returning..." + tempWordBeingPlayed);
		}
 		
 		
 		return(tempWordBeingPlayed);

		//is this letter in the word?
		//if yes:
		// update word/underscores
		// if no:
		// increment guesses
		// check if game over

	}
}





	//already selected?

	//check for matches against played word

	// tempWordBeingPlayed = "";
	// var matchedGuess = false;
	// //Force lowercase
	// letterPlayed = String.fromCharCode(event.keyCode).toLowerCase();

	// wordBeingPlayed = tempWordBeingPlayed;

	// // 		Display letter in "already used" bin
	// if (matchedGuess == true) {
	// 	checkValidSelection(letterPlayed,"true");
	// 	printLetters();
	// 	wordComplete();
	// }
	
	// if (matchedGuess == false) {
	// 	checkValidSelection(letterPlayed,"false");
	// }



