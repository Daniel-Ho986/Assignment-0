function frequencyCounter(word) {
var object = new Object();

for (let i = 0; i < word.length; i++){
	var letter = word[i];
	object[letter] = object[letter] ? object[letter] + 1 : 1;
}

return object;
}

// Do not edit this line;
module.exports = frequencyCounter;
