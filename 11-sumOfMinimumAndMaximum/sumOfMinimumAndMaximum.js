function sumOfMinimumAndMaximum(nums) {
var smallest = nums[0];
var largest = nums[0];

for (let i = 0; i < nums.length; i++){
	if (nums[i] < smallest)
		smallest = nums[i];
	if (nums[i] > largest)
		largest = nums[i];
}
return smallest + largest;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
