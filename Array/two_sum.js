//* Two Sum

//? Given an array of integers nums and an integer target,
//? return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9 --> Output: [0,1]
// Input: nums = [3,2,4], target = 6 --> Output: [1,2]

//* Brute Force Approach:
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// };
//? Time Complexity: O(n^2) - We have two nested loops to check all pairs of numbers.
//? Space Complexity: O(1) - We use a constant amount of space to store the indices.

//* Using Hash Map:
const twoSum = function (nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }

  return null;
};
//? Time Complexity: O(n) - We traverse the array once to find the two numbers.
//? Space Complexity: O(n) - We use a hash map to store the numbers and their indices.

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
