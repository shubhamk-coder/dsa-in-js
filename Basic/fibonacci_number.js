//* Fibonacci Number

//? Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

//? The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
//? such that each number is the sum of the two preceding ones, starting from 0 and 1.

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

//Input: n = 2 --> Output: 1
//Input: n = 3 --> Output: 2

//* Using for loop:
// const fib = function (n) {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   return arr[n];
// };
//? Time Complexity: O(n) - We compute each Fibonacci number from 2 to n once.
//? Space Complexity: O(n) - We use an array to store the Fibonacci numbers up to n.

//* Using recursion:
// const fib = function (n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// };
//? Time Complexity: O(2^n) - The recursive solution has an exponential time complexity due to the repeated calculations of the same Fibonacci numbers.
//? Space Complexity: O(n) - The space complexity is O(n) due to the maximum depth of the recursion stack.

//* one-liner
const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

console.log(fib(2)); // 1
console.log(fib(3)); // 2
