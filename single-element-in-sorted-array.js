// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// Example 1:

// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: [3,3,7,7,10,11,11]
// Output: 10

// make a charMap to store numbers as key and number of time in the array as value
// iterate over the charMap and find the key that as a value of 1

var singleNonDuplicate = function(nums) {
    let charMap = {}
    
    for(let char of nums){
        charMap[char] = charMap[char] + 1 || 1
    }

    for(let char in charMap){
        if(charMap[char] === 1){
            return char
        }
    }
};
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))
console.log(singleNonDuplicate([3,3,7,7,10,11,11]))