//* Find boolean object keys

//? Given an object, find the keys from object where value is in boolean type.

// Input: { us: "true", vi: 45, au: "false", gb: true, de: false, jp: "yes" } --> Output: ['gb', 'de']

let x = { us: "true", vi: 45, au: "false", gb: true, de: false, jp: "yes" };

let booleanKeys = Object.entries(x)
  .filter(([key, value]) => typeof value === "boolean")
  .map(([key, value]) => key);

// Time Complexity: O(n) - We iterate through all entries of the object once to filter and map the keys, where n is the number of key-value pairs in the object.
// Space Complexity: O(n) - We use additional space to store the array of boolean keys, where n is the number of keys with boolean values.
console.log(booleanKeys);
