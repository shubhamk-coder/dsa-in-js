//* Maximum Subarray Sum

//? Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4] --> Output: 6 (subarray [4,-1,2,1])
// Input: nums = [1] --> Output: 1 (subarray [1])
// Input: nums = [5,4,-1,7,8] --> Output: 23 (subarray [5,4,-1,7,8])

//* Using Kadane's Algorithm:
//? Kadane's algorithm is an efficient way to solve the maximum subarray sum problem. It works by iterating through the array and keeping track of the current subarray sum and the maximum subarray sum found so far. If the current subarray sum becomes negative, we reset it to zero, as a negative sum would not contribute to a maximum sum in future iterations.

const maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  let startIdx = 0;
  let endIdx = 0;

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum === nums[i]) {
      startIdx = i;
    }
    if (maxSum === currentSum) {
      endIdx = i;
    }
  }

  return { sum: maxSum, subArray: nums.slice(startIdx, endIdx + 1) };
};
//? Time Complexity: O(n) - We traverse the array once.
//? Space Complexity: O(1) - We use a constant amount of space to store the two variables.

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
