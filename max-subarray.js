// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

function maxSubArray(nums) {
    let currentSum = 0
    let num = nums[0]
    
    nums.forEach((a, b) => {
        currentSum = Math.max(a, currentSum + a)
        num = Math.max(num, currentSum)
    })
    return num
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-1, -2, -5, 6]))
console.log(maxSubArray([-1, -2]))