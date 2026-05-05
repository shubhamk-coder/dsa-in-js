//* Valid Anagram

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram" --> Output: true
// Input: s = "rat", t = "car" --> Output: false

//* Brute Force Approach:
// const isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   const sortedS = s.split("").sort().join("");
//   const sortedT = t.split("").sort().join("");
//   return sortedS === sortedT;
// };

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

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
