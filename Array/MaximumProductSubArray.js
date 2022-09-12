//https://leetcode.com/problems/maximum-product-subarray/

var maxProductSubArray = function (arr) {
  let curMax = arr[0];
  let curMin = arr[0];
  let maxGlobal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < 0) {
      let tmp = curMax;
      curMax = curMin;
      curMin = tmp;
    }
    curMax = Math.max(arr[i], arr[i] * curMax);
    curMin = Math.min(arr[i], arr[i] * curMin);
    maxGlobal = Math.max(maxGlobal, curMax);
  }
  return maxGlobal;
};

console.log(maxProductSubArray([2, 3, -2, 4]));
