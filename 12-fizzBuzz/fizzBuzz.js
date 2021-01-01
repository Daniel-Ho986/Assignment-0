function fizzBuzz(start, end) {
var arr = [];
for (let i = start; i < end + 1; i++){
	if (i % 15 == 0)
		arr.push("FizzBuzz");
	else if (i % 5 == 0)
		arr.push("Buzz");
	else if (i % 3 == 0)
		arr.push("Fizz");
	else
		arr.push(i);
}
return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;
