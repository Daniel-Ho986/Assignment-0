function pairSum(nums, target) {
if (nums.length < 2)
    throw 'Array length is less than 2';
else {
    for (let i = 0; i < nums.length - 1; i++){
        for (let val = i + 1; val < nums.length; val++){
            if (nums[i] + nums[val] == target)		
                return true;
	}
}
}
return false;
}

// Do not edit this line;
module.exports = pairSum;
