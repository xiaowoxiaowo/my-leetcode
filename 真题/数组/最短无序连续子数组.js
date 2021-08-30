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
// 每取一个数，该值下标为right,从左向右遍历前面所有的值，找到第一个大于自己的值下标left，需要排序的数组即为[left, right]
// 这里需要注意一点：所有left需要取其中的最小值
var findUnsortedSubarray = function(nums) {
  const len = nums.length;
  if (len <= 1) return 0;
  // 记录最终的连续子数组的左右下标
  let left = right = len;
  // 记录当前项之前的最大值，减少遍历次数，优化性能
  let max = nums[0];
  for (let i = 1; i < len; i ++) {
    if (nums[i] >= max) {
      // 如果当前值大于之前项的最大值，即大于前面所有的值，该项不需要排序
      max = nums[i];
    } else {
      // 如果当前项小于之前项的最大值
      // right - left + 1才是最终数组的长度，所以这里加1
      right = i + 1;
      // 遍历之前的数组
      for (let j = 0; j < i; j ++) {
        // 找到第一个大于当前项的值下标
        if (nums[j] > nums[i]) {
          // 跟之前的left进行比较，取最小值
          left = Math.min(left, j);
          break;
        }
      }
    }
  }
  return right - left;
};

console.log(findUnsortedSubarray([1,2,3,4]));