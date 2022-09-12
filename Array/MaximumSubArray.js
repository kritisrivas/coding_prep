//https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (arr) {
  let curMax = arr[0];
  let globalMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    curMax = Math.max(arr[i], arr[i] + curMax);
    globalMax = Math.max(curMax, globalMax);
  }
  return globalMax;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
