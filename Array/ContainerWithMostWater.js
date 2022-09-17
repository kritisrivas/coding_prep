//https://leetcode.com/problems/container-with-most-water/

var maxWaterContainer = function (nums) {
  let start = 0,
    end = nums.length - 1;
  let maxArea = 0;
  while (start < end) {
    let containerHeight = Math.min(nums[start], nums[end]);
    let containerWidth = end - start;
    let curArea = containerHeight * containerWidth;
    maxArea = Math.max(curArea, maxArea);
    if (nums[start] > nums[end]) {
      end--;
    } else {
      start++;
    }
  }
  return maxArea;
};

console.log(maxWaterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxWaterContainer([1, 1]));
