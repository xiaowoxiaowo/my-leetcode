/***
 * leetcode 34
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 
 * 进阶：你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 * 
 */

var searchRange = function(nums, target) {
  if(!nums.length) return [-1,-1];
  let left = 0, right = nums.length -1;
  let start = 0, end = 0;
  while(left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if(nums[mid] === target) {
      start = mid;
      end = mid;
      while(start > left && nums[start] === nums[start-1]) start--;
      while(end < right && nums[end] === nums[end+1]) end++;
      return [start,end];
    } else if(nums[mid] > target){
      right = mid -1;
    } else {
      left = mid + 1;
    }
  }
  return [-1,-1];
};

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([1], 1));
