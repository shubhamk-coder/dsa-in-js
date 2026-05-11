//* Truncate the text

//? Write a function that truncates a string (first argument) if it is longer than the given maximum string length (second argument). The truncated string should end with "..." and the total length of the truncated string including the ellipsis should not exceed the given maximum string length. If the given maximum string length is less than or equal to 3, then the ellipsis counts as part of the maximum string length.

// Input: str = "A-tisket a-tasket A green and yellow basket", num = 11
// Output: "A-tisket..."

// Input: str = "Peter Piper picked a peck of pickled peppers", num = 14
// Output: "Peter Piper..."

function truncateString(str, num) {
  if (num < str.length) {
    return str.slice(0, num - 3) + "...";
  } else return str;
}
//? Time complexity: O(n) where n is the length of the string
//? Space complexity: O(1) since we are not using any additional data structures

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
