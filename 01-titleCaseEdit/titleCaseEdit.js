function titleCaseEdit(title) {
var words = title.split(" ");

for (var i = 0; i < words.length; i++){
	words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

var joinedWords = words.join(" ");

return joinedWords;
}

// Do not edit this line;
module.exports = titleCaseEdit;
