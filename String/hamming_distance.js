//* Hamming Distance

//? variation 1: The Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols are different. In other words, it measures the minimum number of substitutions required to change one string into the other, or the number of errors that transformed one string into the other.

// Input: s = "kitten", t = "sitting" --> Output: Error (strings must be of equal length)
// Input: s = "flaw", t = "lawn" --> Output: 2

function hammingDistance(s, t) {
  if (s.length !== t.length) {
    // throw new Error("Strings must be of equal length");
    console.error("Strings must be of equal length");
    return;
  }
  let distance = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      distance++;
    }
  }
  return distance;
}
//? Time complexity: O(n) where n is the length of the strings
//? Space complexity: O(1) since we are using a constant amount of space to store the distance

console.log(hammingDistance("kitten", "sitting")); // 3
console.log(hammingDistance("flaw", "lawn")); // 2

//? variation 2: The Hamming distance between two integers is the number of positions at which the corresponding bits are different. In other words, it measures the minimum number of bit flips required to change one integer into the other.

// Input: x = 1, y = 4 --> Output: 2 (1 in binary is 0001 and 4 in binary is 0100, so they differ at the second and third bits)
// Input: x = 3, y = 1 --> Output: 1 (3 in binary is 0011 and 1 in binary is 0001, so they differ at the second bit)

function hammingDistanceBinary(x, y) {
  let distance = 0;
  while (x > 0 || y > 0) {
    if ((x & 1) !== (y & 1)) {
      distance++;
    }
    x >>= 1;
    y >>= 1;
  }
  return distance;
}

//? Code Explanation: The function hammingDistanceBinary takes two integers x and y as input. It initializes a variable distance to 0, which will keep track of the number of differing bits. The while loop continues as long as either x or y is greater than 0. Inside the loop, it checks if the least significant bits of x and y are different using the bitwise AND operator (&). If they are different, it increments the distance by 1. Then, it right shifts both x and y by one bit (x >>= 1 and y >>= 1) to check the next bits in the next iteration. Finally, it returns the calculated distance.

//? Time complexity: O(log n) where n is the maximum of x and y, since we are iterating through the bits of the integers
//? Space complexity: O(1) since we are using a constant amount of space to store the distance

console.log(hammingDistanceBinary(1, 4)); // 2
console.log(hammingDistanceBinary(3, 1)); // 1
