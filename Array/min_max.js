//* Min max

//? Problem Statement: Given an array of numbers, find the minimum and maximum values in the array.

// Input: [3, 1, 4, 1, 5, 9] --> Output: { min: 1, max: 9 }

const findMinMax = function (arr) {
  if (arr.length === 0) return null; // Handle empty array case
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  return { min, max };
};
//? Time Complexity: O(n) - We traverse the array once to find the minimum and maximum values, where n is the number of elements in the array.
//? Space Complexity: O(1) - We use a constant amount of space to store the minimum and maximum values.

console.log(findMinMax([3, 1, 4, 1, 5, 9])); // { min: 1, max: 9 }

//* Alternative approach using built-in functions:
const findMinMaxBuiltIn = function (arr) {
  if (arr.length === 0) return null;
  return { min: Math.min(...arr), max: Math.max(...arr) };
};

console.log(findMinMaxBuiltIn([3, 1, 4, 1, 5, 9])); // { min: 1, max: 9 }

//? Time Complexity: O(n) - The spread operator and Math.min/Math.max functions internally iterate through the array to find the minimum and maximum values, resulting in O(n) time complexity.
//? Space Complexity: O(n) - The spread operator creates a new array with all the elements, which takes O(n) space.

//* Approach using reduce:
const findMinMaxReduce = function (arr) {
  if (arr.length === 0) return null;
  return arr.reduce(
    (acc, val) => {
      return {
        min: Math.min(acc.min, val),
        max: Math.max(acc.max, val),
      };
    },
    { min: arr[0], max: arr[0] },
  );
};

console.log(findMinMaxReduce([3, 1, 4, 1, 5, 9])); // { min: 1, max: 9 }

//? Time Complexity: O(n) - We traverse the array once using reduce to find the minimum and maximum values, where n is the number of elements in the array.
//? Space Complexity: O(1) - We use a constant amount of space to store the accumulator object that holds the minimum and maximum values.
