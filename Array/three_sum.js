//* Three sum

//? Given an array of integers, find all unique triplets in the array which gives the sum of zero.

// Input: nums = [-1,0,1,2,-1,-4] --> Output: [[-1,-1,2],[-1,0,1]]
// Input: nums = [] --> Output: []
// Input: nums = [0] --> Output: []

//* Brute Force Approach:
// const threeSum = function (nums) {
//   const result = [];
//   for (let i = 0; i < nums.length - 2; i++) {
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
//           if (!result.some((t) => t[0] === triplet[0] && t[1] === triplet[1] && t[2] === triplet[2])) {
//             result.push(triplet);
//           }
//         }
//       }
//     }
//   }
//   return result;
// };
//? Time Complexity: O(n^3) - We have three nested loops to check all triplets of numbers.
//? Space Complexity: O(n) - We use a result array to store the unique triplets.

//* Using Sorting and Two Pointers:
const threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
//? Time Complexity: O(n^2) - We have a loop and two pointers to check all triplets of numbers.
//? Space Complexity: O(n) - We use a result array to store the unique triplets.

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
