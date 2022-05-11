const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let x = 0; x < nums.length; x++) {
            if (i === x) continue;
            if (nums[i] + nums[x] === target) return [i, x];
        }
    }
};

console.log(twoSum([2,7,11,15], 9)) // [0, 1]
console.log(twoSum([3,2,4], 6)) // [1, 2]
console.log(twoSum([3,3], 6)) // [0, 1]