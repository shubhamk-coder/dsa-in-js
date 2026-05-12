//* Array items count

//? Given an array of items, count the occurrences of each item and return an object with the item as the key and the count as the value.

const inputArray = ["apple", "banana", "apple", "cherry", "banana", "apple"];

const countOccurrences = (arr) => {
  return arr.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {});
};
//? Time complexity: O(n) where n is the length of the input array, as we need to iterate through each item once to count occurrences.
//? Space complexity: O(n) where n is the number of unique items in the input array, as we need to store the count for each unique item in the resulting object.

const output = countOccurrences(inputArray);
console.log(output); // { 'apple': 3, 'banana': 2, 'cherry': 1 }
