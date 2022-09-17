//https://leetcode.com/problems/search-in-rotated-sorted-array/

var searchInRotatedSorted = function (nums, target) {
  let start = 0,
    end = nums.length - 1,
    mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return nums[end] === target ? end : -1;
};

console.log(searchInRotatedSorted([4, 5, 6, 7, 0, 1, 2], 0));
