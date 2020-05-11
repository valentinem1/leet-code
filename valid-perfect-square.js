// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Output: true
// Example 2:

// Input: 14
// Output: false

// create a loop to generate numbers to check on num
// check if the loop number multiplicated by itself equals num
// if yes it's a perfect square!!

var isPerfectSquare = function(num) {
    for(let i = 1; i <= num; i++){
        if(i * i === num){
            return true
        }
    }
    return false
};
console.log(isPerfectSquare(16))
console.log(isPerfectSquare(14))
console.log(isPerfectSquare(1))