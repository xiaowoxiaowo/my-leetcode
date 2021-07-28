/**
 * leetcode 53. 最大子序和
 * 
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 
 * 输入：nums = [1]
 * 输出：1
 * 
 */
// 前缀和 + 贪心的思路
// 在遍历数组，得到所有下标的前缀和的同时，记录当前遍历过的下标的最小值(必须是小于0的)
// 新的下标前缀和 - 当前下标的最小值 = 当前下标的最大值
// 记录这个最大值，遍历取最大
var maxSubArray = function(nums) {
  const len = nums.length;
  if (len === 0) return 0;
  // 最小值，最大值初始化
  // 这里要注意，最小值必须是小于0的，因为需要进行减法
  let min = Math.min(nums[0], 0), max = nums[0];
  // 前缀和，可以把数组优化成一个变量，因为只需要计算上一个前缀和即可
  let indexSum = nums[0];
  // 遍历数组
  for (let i = 1; i < len; i ++) {
    // 得到新的下标的前缀和
    indexSum = indexSum + nums[i];
    // 前缀和 - 上一个下标中的最小值
    // 得到最大值
    max = Math.max(max, indexSum - min);
    // 计算当前的前缀和是否比上一个下标的最小值要小
    min = Math.min(min, indexSum);
  }
  return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));