//* Rotate by 90 degree

//? Rotate a given 2D array by 90 degree in clockwise direction.

// Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

//* Approach 1: Using an additional matrix to store the rotated version
function rotateBy90Degree(matrix) {
  const n = matrix.length;
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }

  return result;
}
//? Time Complexity: O(n^2) - We need to iterate through all elements of the matrix once.
//? Space Complexity: O(n^2) - We are using an additional matrix to store the rotated version.

console.log(
  rotateBy90Degree([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
console.log(
  rotateBy90Degree([
    [1, 2],
    [3, 4],
  ]),
); // Output: [[3, 1], [4, 2]]

//* Approach 2: In-place rotation (without using extra space)
function rotate(mat) {
  const n = mat.length;

  // Step 1: Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
      console.log(mat[i][j], " replaces -> ", mat[j][i]);
      console.log(mat[j][i], " replaces -> ", mat[i][j]);
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    mat[i].reverse();
  }

  return mat;
}
//? Time Complexity: O(n^2) - We need to iterate through all elements of the matrix for both transposition and reversal.
//? Space Complexity: O(1) - We are performing the rotation in-place without using any additional space.

const test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(rotate(test));
