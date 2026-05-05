//* Palindrome Number

// An integer is a palindrome when it reads the same backward and forward.

// Input: x = 121 --> Output: true
// Input: x = 122 --> Output: false

const isPalindrome = function (x) {
  if (x < 0) return false;
  const str = x.toString();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(122)); // false
