/***
 * leetcode 213
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，
 * 这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。
 * 
 * 
 * 例1：
 * 输入：nums = [2,3,2]
 * 输出：3
 * 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
 * 
 * 输入：nums = [1,2,3,1]
 * 输出：4
 * 解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 输入：nums = [0]
 * 输出：0
 * 
 * 解题思路：
 * 
 */
const robDp = (nums, start, end) => {
  let len = end - start;
  let dp = new Array(len).fill(-1);
  dp[end] = nums[end];
  for (let i = end - 1; i >= start; i --) {
    for (let j = i; j < end; j ++) {
      const nextVal = (j + 2 >= len) ? 0 : dp[j + 2];
      dp[i] = Math.max(dp[i], nums[j] + nextVal);
    }
  }
  return dp;
};

var rob = function(nums) {
  let len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];
  console.log(robDp(nums, 0, len - 1));
  // return Math.max(robDp(nums, 0, len - 1), robDp(nums, 1, len));
};

console.log(rob([1,3,1,3,100]));