// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

function moveZeroes(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            let zero = nums.splice(i ,1)
            nums.push(0)
        }
    }
    // return nums
};
console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([1, 0, 0]))