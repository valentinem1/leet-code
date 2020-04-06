// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

function groupAnagrams(strs) {
    let charMap = {}

    for(let word of strs){
        let letters = word.split('').sort()
        charMap[letters] ? charMap[letters].push(word) : charMap[letters] = [word]
    }

    return Object.values(charMap)
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams(["cat", "420", "240"]))
