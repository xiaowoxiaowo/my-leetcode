/***
 * leetcode 494
 * 给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，target。现在你有两个符号 + 和 -。对于数组中的任意一个整数，
 * 你都可以从 + 或 - 中选择一个符号添加在前面。
 * 
 * 返回可以使最终数组和为目标数 target 的所有添加符号的方法数。
 * 
 * 
 * 输入：nums: [1, 1, 1, 1, 1], target: 3
 * 输出：5
 * 解释：
 * -1+1+1+1+1 = 3
 * +1-1+1+1+1 = 3
 * +1+1-1+1+1 = 3
 * +1+1+1-1+1 = 3
 * +1+1+1+1-1 = 3
 * 一共有5种方法让最终目标和为3。
 * 
 * 解题思路：
 * 题目中对于每个元素都会存在两个状态，我们可以反向对该题进行求解。
 * 计算nums中所有值的总和sum,定义一个变量T = (sum - target)/2
 * 可以把原问题转换成：将原问题转换成：从nums中选出一个或者多个元素，等于T，有多少种取法？
 * 这样就又回到我们熟悉的背包问题中。
 * 
 */
var findTargetSumWays = function(nums, target) {
  const len = nums.length;
  let sum = 0;
  // 计算nums中所有值的总和sum
  for (let i = 0; i < len; i ++) {
    sum += nums[i];
  }
  // 边界情况处理，sum < target或者(sum - target) % 2 !== 0的情况，都无法得到值
  // 这里要注意，如果sum === target,并不一定只会有一个解，因为数组有可能存在0
  if (sum < target || (sum - target) % 2 !== 0) return 0;
  const T = (sum - target) / 2;
  // 将原问题转换成：从nums中选出一个或者多个元素，等于T，有多少种取法？
  // 0-1背包，nums外层循环，target内部反向循环
  // 组合问题，dp[j] += dp[j - nums[i]];
  // dp的二维数组
  // x轴，当取第0,1,2...len-1个nums元素
  // y轴，当target为0,1,2...T
  const dp = new Array(T + 1).fill(0);
  // dp[0][0]时，存在一种解，啥都不选
  dp[0] = 1;
  // dp[1]的初始化，即当取第0个nums元素
  for (let i = 0; i <= T; i ++) {
    // 这里需要注意，如果该值为0，初始应该设置为2。因为+0和-0都等于0
    if (i === nums[0]) dp[i] = i ? 1 : 2;
  }

  for (let i = 1; i < len; i ++) {
    for (let j = T; j >= nums[i]; j --) {
      // 状态转移方程
      dp[j] += dp[j - nums[i]];
    }
  }
  return dp[T];
};

console.log(findTargetSumWays([0,0,0,0,0,0,0,0,1], 1));