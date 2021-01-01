function setUnionOfAnyAmountOfSets(...args) {
var union = new Set();
for (let set of args){
	for (let val of set){
		union.add(val);
	}
}
return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
