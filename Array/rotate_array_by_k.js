//* Rotate Array By K

//? Given an array, rotate the array to the right by k steps, where k is non-negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3 --> Output: [5,6,7,1,2,3,4]

//? Explanation:
//? rotate 1 steps to the right: [7,1,2,3,4,5,6]
//? rotate 2 steps to the right: [6,7,1,2,3,4,5]
//? rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Input: nums = [-1,-100,3,99], k = 2 --> Output: [3,99,-1,-100]

//* Brute Force Approach:
// const rotateArray = (nums, k) => {
//   const size = nums.length;
//   if (size > k) {
//     k = k % size;
//   }

//   const rotated = nums.splice(size - k, size);
//   nums.unshift(...rotated);
//   return nums;
// };
//? Time Complexity: O(n) where n is the size of the input array
//? Space Complexity: O(k) where k is the number of rotations

//* Optimized Approach:
const rotateArray = (nums, k) => {
  const size = nums.length;
  if (size > k) {
    k = k % size;
  }

  reverse(nums, 0, size - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, size - 1);

  return nums;
};

const reverse = (arr, left, right) => {
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
};
//? Time Complexity: O(n) where n is the size of the input array
//? Space Complexity: O(1) since we are doing the rotation in place without using any extra space

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5,6,7,1,2,3,4]
console.log(rotateArray([-1, -100, 3, 99], 2)); // Output: [3,99,-1,-100]
