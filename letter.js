// export to use in word.js
//Constructor to create a simple letter object
exports.LetterObjectCreator = function(letter,status,display) {
	this.letter = letter, // a letter in the word being played
	this.status = status, // true if already guessed, false if not
	this.display = display // "_" or the letter depending on if it was guessed yet
};


