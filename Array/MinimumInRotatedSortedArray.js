//https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function (nums) {
  let start = 0,
    end = nums.length - 1,
    mid;
  if (nums[0] < nums[end]) {
    return nums[0];
  }
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }
    if (nums[mid] > nums[0]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return nums[mid];
};

console.log(findMin([3, 4, 5, 1, 2]));
