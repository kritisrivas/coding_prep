//https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    } else {
      map.set(nums[i], i);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
