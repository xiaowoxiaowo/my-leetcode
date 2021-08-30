/**
 * leetcode 581. 最短无序连续子数组
 * 
 * 给你一个整数数组 nums ，你需要找出一个 连续子数组 ，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 * 请你找出符合题意的 最短 子数组，并输出它的长度。
 * 
 * 输入：nums = [2,6,4,8,10,9,15]
 * 输出：5
 * 解释：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
 * 
 * 输入：nums = [1,2,3,4]
 * 输出：0
 * 
 * 输入：nums = [1]
 * 输出：0
 */
var findUnsortedSubarray = function(nums) {
  const len = nums.length;
  if (len <= 1) return 0;
  let left = right = -1;
  let max = nums[0];
  for (let i = 1; i < len; i ++) {
    if (nums[i] >= max[0]) {
      max = nums[i];
    } else {
      right = i;
      for (let j = 0; j < i; j ++) {
        if (nums[j] > nums[i]) {
          left = Math.min(left, j);
          break;
        }
      }
    }
  }
  return right - left + 1;
};

console.log(findUnsortedSubarray([2,6,4,8,10,9,15]));