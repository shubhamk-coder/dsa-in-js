//* Count Letters

//? Create a function that counts the number of occurrences of each letter in a string. Return an object with the letters as keys and the counts as values.

// Input: Abbaaacddda
// Output: 1A2b3a1c3d1a

//* Brute Force Solution:
const countAlpha = (str) => {
  let arr = str.split("");
  let arr1 = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count = count + 1;
      }
    }
    arr1.push(count);
    arr1.push(arr[i]);
    count = 0;
  }
  return arr1;
};
//? Time Complexity: O(n^2) where n is the length of the input string.
//? Space Complexity: O(n) where n is the length of the input string.
console.log(countAlpha("Abbaaacddda")); // Output: [1, 'A', 2, 'b', 3, 'a', 1, 'c', 3, 'd', 1, 'a']

//* Optimized Solution:
function countLetters(str) {
  let count = {};
  for (let char of str) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  let result = "";
  for (let key in count) {
    result += count[key] + key;
  }
  return result;
}
//? Time Complexity: O(n) where n is the length of the input string.
//? Space Complexity: O(k) where k is the number of unique letters in the input string.

console.log(countLetters("Abbaaacddda")); // Output: 1A2b3a1c3d1a

//* Another Solution:
function countAlpha(inputString) {
  let outputString = "";
  let count = 1;

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === inputString[i + 1]) {
      count++;
    } else {
      outputString += count + inputString[i];
      count = 1;
    }
  }

  return outputString;
}
//? Time Complexity: O(n) where n is the length of the input string.
//? Space Complexity: O(n) where n is the length of the output string.

let str = "Abbaaacddda";
console.log(countAlpha(str)); // Output: 1A2b3a1c3d1a
