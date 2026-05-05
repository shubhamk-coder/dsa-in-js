//* Second Largest Number

//? Given an array of numbers, return the second largest number in the array. If there is no second largest number, return null.

//Input: [3, 1, 4, 1, 5, 9] --->>> Output: 5

//Input: [1, 1, 1] --->>> Output: null

//* Brute Force Solution
// const secondLargestNumber = (arr) => {
//   if (arr.length < 2) {
//     return null;
//   }

//   const uniqueArr = [...new Set(arr)]; // we can also user Array.from(new Set(arr))
//   const sortedArr = uniqueArr.sort((a, b) => b - a);
//   if (sortedArr.length < 2) {
//     return null;
//   }
//   return sortedArr[1];
// };
//? Time Complexity: O(n log n) - We sort the array, which takes O(n log n) time.
//? Space Complexity: O(n) - We create a new array to store the unique values and the sorted array.

//* Optimized Solution
const secondLargestNumber = (arr) => {
  if (arr.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
};

//? Time Complexity: O(n) - We traverse the array once to find the largest and second largest numbers.
//? Space Complexity: O(1) - We use a constant amount of space to store the largest and second largest numbers.

console.log(secondLargestNumber([3, 1, 4, 1, 5, 9])); // Output: 5
console.log(secondLargestNumber([1, 1, 1])); // Output: null
