//* Palindrome Number

//? An integer is a palindrome when it reads the same backward and forward.

// Input: x = 121 --> Output: true
// Input: x = 122 --> Output: false

const isPalindrome = function (x) {
  if (x < 0) return false;
  const str = x.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};
//? Time Complexity: O(n) - We convert the number to a string and reverse it, which takes O(n) time where n is the number of digits in the number.
//? Space Complexity: O(n) - We use additional space to store the string representation of the number and its reversed version.

console.log(isPalindrome(121)); // true
console.log(isPalindrome(122)); // false
