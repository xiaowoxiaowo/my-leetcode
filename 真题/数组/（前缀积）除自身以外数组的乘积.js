/**
 * leetcode 238. 除自身以外数组的乘积
 * 
 * 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 * 
 * 输入: [1,2,3,4]
 * 输出: [24,12,8,6]
 * 
 * 提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。
 * 说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 * 
 */
// 建立左右两个前缀积，当前项i的结果，只需要计算leftArr[i - 1] * rightArr[i + 1]即可
var productExceptSelf = function(nums) {
  const len = nums.length;
  const leftArr = new Array(len).fill(nums[0]);
  const rightArr = new Array(len).fill(nums[len - 1]);
  for (let i = 1; i < len; i ++) {
    leftArr[i] = nums[i] * leftArr[i - 1];
  }
  for (let i = len - 2; i >= 0; i --) {
    rightArr[i] = nums[i] * rightArr[i + 1];
  }
  const res = [];
  for (let i = 0; i < len; i ++) {
    if (i === 0) {
      res[i] = rightArr[1];
    } else if (i === len - 1) {
      res[i] = leftArr[len - 2];
    } else {
      res[i] = leftArr[i - 1] * rightArr[i + 1];
    }
  }
  return res;
};

console.log(productExceptSelf([1,2,3,4]));
