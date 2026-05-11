//* Valid Anagram

//? An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//? typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram" --> Output: true
// Input: s = "rat", t = "car" --> Output: false

//* Brute Force Approach:
// const isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   const sortedS = s.split("").sort().join("");
//   const sortedT = t.split("").sort().join("");
//   return sortedS === sortedT;
// };
//? Time Complexity: O(n log n) - We sort both strings, which takes O(n log n) time where n is the length of the strings.
//? Space Complexity: O(n) - We use additional space to store the sorted versions of the strings.

//* Using Objects:
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const charCount = {};

  // Count characters in string s
  for (let char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Subtract character counts based on string t
  for (let char of t) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
};
//? Time Complexity: O(n) - We traverse both strings once to count the characters and compare the counts.
//? Space Complexity: O(1) - We use a fixed amount of space for the character count object, as there are only a limited number of characters (assuming ASCII).

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
