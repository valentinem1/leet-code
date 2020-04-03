// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

function singleNumber(nums) {
    let char = {}
      for(let el of nums){
        char[el] = char[el] + 1 || 1
      }
    
    for(let key in char){
        if(char[key] === 1){
            return key
        }
    }
};
console.log(singleNumber([2,2,1]))
console.log(singleNumber([4,1,2,1,2]))