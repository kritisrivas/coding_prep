//https://leetcode.com/problems/product-of-array-except-self/

var productExceptSelf = function (nums) {
  var preArr = [1];
  var sufArr = [1],
    outputArr = [];
  for (let i = 0; i < nums.length; i++) {
    preArr.push(preArr[i] * nums[i]);
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    sufArr.unshift(nums[j] * sufArr[0]);
  }

  for (let k = 0; k < nums.length; k++) {
    outputArr[k] = preArr[k] * sufArr[k + 1];
  }
  return outputArr;
};
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
