//* Remove Duplicates from Sorted Array

//? Given an integer array nums sorted in non-decreasing order,
//? remove the duplicates in-place such that each unique element appears only once.
//? The relative order of the elements should be kept the same.

// Input: nums = [1,1,2] --> Output: 2, nums = [1,2]
// Input: nums = [0,0,1,1,1,2,2,3,3,4] --> Output: 5, nums = [0,1,2,3,4]

//* Brute Force Approach:
//? We can use a set to keep track of the unique elements in the array. We can iterate through the array and add each element to the set. Finally, we can convert the set back to an array and return its length.

const removeDuplicatesBruteForce = function (nums) {
  const uniqueElements = new Set(nums);
  const uniqueArray = Array.from(uniqueElements);
  for (let i = 0; i < uniqueArray.length; i++) {
    nums[i] = uniqueArray[i];
  }
  return uniqueArray.length;
};
//? Time Complexity: O(n) - We traverse the array once to add elements to the set and once to convert the set back to an array.
//? Space Complexity: O(n) - We use a set to store unique elements, which can take up to O(n) space in the worst case.

//* Optimal Approach: Using splice method
//? We can iterate through the array and compare each element with the next one. If they are the same, we can remove the duplicate element using the splice method.
const removeDuplicatesOptimal = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--; // Adjust the index after removal
    }
  }
  return nums.length;
};
//? Time Complexity: O(n^2) - In the worst case, we might have to remove all elements, leading to a quadratic time complexity.
//? Space Complexity: O(1) - We use a constant amount of space to store the pointers.

//* Two pointers Approach:
//? We can use two pointers to solve this problem. The first pointer (i) will keep track of the position of the last unique element, while the second pointer (j) will traverse the array to find unique elements. Whenever we find a unique element, we move it to the position next to the last unique element and increment the first pointer.

const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
//? Time Complexity: O(n) - We traverse the array once to find unique elements.
//? Space Complexity: O(1) - We use a constant amount of space to store the two pointers.

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
