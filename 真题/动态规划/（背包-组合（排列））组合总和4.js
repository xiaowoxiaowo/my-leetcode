/***
 * leetcode 377
 * 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。
 * 题目数据保证答案符合 32 位整数范围。
 * 
 * 输入：nums = [1,2,3], target = 4
 * 输出：7
 * 解释：所有可能的组合为：
 * (1, 1, 1, 1)
 * (1, 1, 2)
 * (1, 2, 1)
 * (1, 3)
 * (2, 1, 1)
 * (2, 2)
 * (3, 1)
 * 请注意，顺序不同的序列被视作不同的组合。
 * 
 * 输入：nums = [9], target = 3
 * 输出：0
 *
 * 
 * 解题思路：
 * 
 */
// 因为顺序不同的序列可以被视作不同的的组合，而且每个元素可以被重复使用
// 所以我们可以套用target放在外循环，将nums放在内循环的方法
// 然后配合组合问题的一般公式dp[i] += dp[i-num]得到结果
 var combinationSum4 = function(nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (num <= i) {
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[target];
};

/***
 * leetcode 377
 * 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。
 * 题目数据保证答案符合 32 位整数范围。
 * 
 * 输入：nums = [1,2,3], target = 4
 * 输出：7
 * 解释：所有可能的组合为：
 * (1, 1, 1, 1)
 * (1, 1, 2)
 * (1, 2, 1)
 * (1, 3)
 * (2, 1, 1)
 * (2, 2)
 * (3, 1)
 * */

var combinationSum4 = function(nums, target) {
  const len = nums.length;
  if (nums.length === 1) return 0;
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i <= target; i ++) {
    for (let j = 0; j < len; j ++) {
      if (nums[j] <= i) {
        dp[i] = dp[i] + dp[i - nums[j]];
      }
    }
  }
  return dp[target];
};