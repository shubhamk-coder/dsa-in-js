//* Key Values Reverse

//? Given an object, return a new object with the keys and values reversed. Assume that all of the object's values will be unique and string serializable.

// Input: {
//   house1: ["kid1", "kid3", "kid4"],
//   house2: ["kid39", "kid6"],
//   house3: ["kid1", "kid7"],
//   house4: ["kid2", "kid7", "kid1"]
// }
// Output: {
//   "kid1": ["house1", "house3", "house4"],
//   "kid2": ["house4"],
//   "kid3": ["house1"],
//   "kid4": ["house1"],
//   "kid39": ["house2"],
//   "kid6": ["house2"],
//   "kid7": ["house3", "house4"]
// }

function keyValuesReverse(obj) {
  let reversedObj = {};
  for (let key in obj) {
    let values = obj[key];
    for (let value of values) {
      if (!reversedObj[value]) {
        reversedObj[value] = [];
      }
      reversedObj[value].push(key);
    }
  }
  return reversedObj;
}
//? Time Complexity: O(n * m) where n is the number of keys in the object and m is the average number of values for each key.
//? Space Complexity: O(n * m) in the worst case, if all values are unique and each key has a unique set of values.

console.log(
  keyValuesReverse({
    house1: ["kid1", "kid3", "kid4"],
    house2: ["kid39", "kid6"],
    house3: ["kid1", "kid7"],
    house4: ["kid2", "kid7", "kid1"],
  }),
);
// Output: {
//   "kid1": ["house1", "house3", "house4"],
//   "kid2": ["house4"],
//   "kid3": ["house1"],
//   "kid4": ["house1"],
//   "kid39": ["house2"],
//   "kid6": ["house2"],
//   "kid7": ["house3", "house4"]
// }

// Another way:
function reverseMap(houseparty) {
  const kidToHouses = {};

  // Loop through each house in the houseparty object
  for (const house in houseparty) {
    // Get the list of kids in the current house
    const kids = houseparty[house];

    // Loop through each kid in the current house
    for (const kid of kids) {
      // Check if the current kid already exists in the kidToHouses object
      if (kidToHouses[kid]) {
        // If the kid already exists, add the current house to the kid's list of houses
        kidToHouses[kid].push(house);
      } else {
        // If the kid doesn't exist, create a new list with the current house and add it to the kidToHouses object
        kidToHouses[kid] = [house];
      }
    }
  }
  return kidToHouses;
}
//? Time Complexity: O(n * m) where n is the number of houses and m is the average number of kids in each house.
//? Space Complexity: O(n * m) in the worst case, if all kids are unique and each house has a unique set of kids.

console.log(reverseMap(houseparty));
const kids = reverseMap(houseparty);
for (const kid in kids) {
  console.log(`${kid} : [${kids[kid].join(", ")}]`);
}
