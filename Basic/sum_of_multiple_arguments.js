//* Sum of multiple arguments

// Input: 1, 2, 3, 4, 5, 6
// Output: 21

//* Using rest Operator
function add(a, b, ...rest) {
  let sum = a + b;
  for (let i = 0; i < rest.length; i++) {
    sum = sum + rest[i];
  }
  return sum;
}

console.log(add(1, 2, 3, 4, 5, 6));

//* Without using rest operator
/* function add(arguments) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(1, 2, 3, 4, 5, 6)); */
