function isPalindrome(word) {
var reverseWord = word.toLowerCase().split('').reverse().join('');
return reverseWord === word;
}

// Do not edit this line;
module.exports = isPalindrome;
