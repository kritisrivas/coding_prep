//https://leetcode.com/problems/coin-change/

var minNumberOfCoins = function (coins, amount) {
  coins.sort((a, b) => a - b);
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length && i >= coins[j]; j++) {
      dp[i] = Math.min(1 + dp[i - coins[j]], dp[i]);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(minNumberOfCoins([1, 2, 5], 11));
