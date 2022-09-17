// https://leetcode.com/problems/3sum/

var twoSum = function (nums, target, ind) {
  let start = ind,
    end = nums.length - 1;
  let retSet = new Set();
  while (start < end) {
    if (nums[start] + nums[end] === target) {
      retSet.add(JSON.stringify([nums[ind - 1], nums[start], nums[end]]));
    }
    if (nums[start] + nums[end] > target) {
      end--;
    } else {
      start++;
    }
  }
  return retSet;
};
var threeSum = function (nums) {
  let res = [],
    finalSet = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let resultSet = twoSum(nums, 0 - nums[i], i + 1);
    if (resultSet.size > 0) {
      for (let [key] of resultSet.entries()) {
        finalSet.add(JSON.parse(key));
      }
    }
  }
  for (let [key] of finalSet.entries()) {
    res.push(key);
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
