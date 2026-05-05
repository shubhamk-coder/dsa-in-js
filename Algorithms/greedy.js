//* Greedy Algorithm

//? Greedy algorithm is an algorithmic paradigm that follows the problem-solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum. It is often used for optimization problems where we want to find the best solution among a set of possible solutions.

//? The greedy algorithm makes a sequence of choices, each of which looks best at the moment, with the hope that these local choices will lead to a global optimum. However, it is important to note that greedy algorithms do not always yield the optimal solution for all problems, and their effectiveness depends on the specific problem being solved.

// Example: Best time to buy and sell stocks

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4] --> Output: 5
// Input: prices = [7,6,4,3,1] --> Output: 0

const maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};
//? Time Complexity: O(n) - We traverse the array once to find the maximum profit.
//? Space Complexity: O(1) - We use a constant amount of space to store the minimum price and maximum profit.

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
