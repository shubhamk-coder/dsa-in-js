//* Largest Common Prefix

//? Given an array of strings, find the largest common prefix among them.

// Input: ["flower","flow","flight"]
// Output: "fl"

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }
  return prefix;
};
// Time Complexity: O(S) where S is the sum of all characters in all strings.
// Space Complexity: O(1) since we are using only a constant amount of extra space.

const arr1 = ["flower", "flow", "flight"];
const arr2 = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(arr1));
console.log(longestCommonPrefix(arr2));

//* Alternative Solution: Vertical Scanning
const longestCommonPrefixVertical = function (strs) {
  if (!strs.length) return "";
  let prefix = "";
  let minLength = Math.min(...strs.map((str) => str.length));

  for (let i = 0; i < minLength; i++) {
    let char = strs[0][i];
    if (strs.every((str) => str[i] === char)) {
      prefix += char;
    } else {
      break;
    }
  }
  return prefix;
};
// Time Complexity: O(S) where S is the sum of all characters in all strings.
// Space Complexity: O(1) since we are using only a constant amount of extra space.

const arr1 = ["flower", "flow", "flight"];
const arr2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefixVertical(arr1));
console.log(longestCommonPrefixVertical(arr2));
