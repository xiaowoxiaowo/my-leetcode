/***
 * leetcode 152
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 * 
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 * 
 */
// 两个需要注意的点
// 1.因为要查询的是最大的连续子数组，所以状态转移方程必须处理的数据必须保证是连续的
// dp[0] = nums[0];
// dp[i] = Math.max(nums[i], nums[i] * dp[i - 1]);
// 这样处理，每次计算的值，都是 当前节点值 或者是 当前节点值 * 包含上一个节点的最大乘积
// 
// 2.因为存在负数，两个负数相乘得到正数，有可能存在两个负数相乘得到最大乘积的情况，所以不能单纯的记录最大值，还需要记录一个最小值
var maxProduct = function(nums) { 
  const len = nums.length;
  if (len < 1) return 0;
  // dp用来记录最大值，最小值
  const dp = [nums[0], nums[0]];
  let max = nums[0];
  for (let i = 1; i < len; i ++) {
    const [preMax, preMin] = dp;
    // 每次都计算 [当前节点值,当前节点值 * 包含上一个节点的最大乘积,当前节点值 * 包含上一个节点的最小乘积]
    // 分别取最大以及最小值，赋值到dp中
    dp[0] = Math.max(nums[i], nums[i] * preMax, nums[i] * preMin);
    dp[1] = Math.min(nums[i], nums[i] * preMax, nums[i] * preMin);
    // 每次计算，都跟最终需要返回的参数max作比较，取较大值
    max = Math.max(max, dp[0]);
  }
  return max;
};

console.log(maxProduct([2,3,-2,4]));