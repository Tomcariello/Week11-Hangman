// word.js contains the methods which check the letters versus the random word
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


exports.processGuess = function(guess) {
	console.log("Processing the guess ");
	//check letter is a-z
	for (i=0; i < alphabet.length; i++) {
		if (guess == alphabet[i]) {
			alreadyGuessed(guess);
		} 	
	}
	console.log("Maybe try a letter...?")
}

  function alreadyGuessed(guess) {
 	console.log("Checking if letter is already guessed");
	//check if letter already guessed
	for (j=0; j <lettersGuessed.length; j++) {
		if (letter == lettersGuessed[j]) {
			console.log("You already guessed that.")
			return;
		} 
	}

	checkAgainstWord(guess);

	printLetters();
	updateBoardImage();	
}

function checkAgainstWord(guess) {
	console.log("checking if guessed letter is in word.")
}

	//already selected?

	//check for matches against played word

	// tempWordBeingPlayed = "";
	// var matchedGuess = false;
	// //Force lowercase
	// letterPlayed = String.fromCharCode(event.keyCode).toLowerCase();
	// // Compare against word
	// for (k = 0; k < currentWord.length; k++) {
	// 	if (letterPlayed == currentWord[k]) {
	// 		tempWordBeingPlayed += letterPlayed;
	// 		matchedGuess = true;
	// 		totalMatchedGuesses++;
	// 	}
	// 	 else if (wordBeingPlayed[k] != "_") {
	// 		tempWordBeingPlayed += wordBeingPlayed[k];
	// 	} else {
	// 		tempWordBeingPlayed += "_";
	// 	}
	// }
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



