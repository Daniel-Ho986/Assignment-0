class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
   //Math.trunc nums.length / 2 for the middle  value
   //check if equal, greater than or less than the target value
   //if equal return true
   //else if less than the target value then use recursion with the right side of the middle value and target to check
   //else if greater than the target value then use recursion with the left side of the middle value and target to check
   //if not found aka nums.length = 0 return false
 
	var midPosition = Math.trunc(nums.length / 2);
	var midValue = nums[midPosition];
	if (midValue === target)
	    return true;
	else if (midValue < target) {
	    let right = [];
	    for (let i = midPosition + 1; i < nums.length; i++){
		right.push(nums[i]);
	    }
	    return this.binarySearch(right, target);
	}
	else if (midValue > target) {
	    let left = [];
	    for (let i = 0; i < midPosition; i++){
		left.push(nums[i]);
	    }
	    return this.binarySearch(left, target);
	}
   return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
