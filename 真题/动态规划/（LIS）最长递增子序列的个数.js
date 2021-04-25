/***
 * leetcode 673
 * 给定一个未排序的整数数组，找到最长递增子序列的个数。
 * 
 * 例1：
 * 输入：[1,3,5,4,7]
 * 输出：2
 * 解释：有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
 * 
 * 输入：[2,2,2,2,2]
 * 输出：5
 * 解释：最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
 * 
 * 
 * 解题思路：
 * 动态规划，需要得到最长递增子序列的个数，难点就在于记录这个个数。
 * 不但需要使用动态规划得到最长递增子序列的长度，也需要通过动态规划获取个数。
 * dp代表了每个节点可以得到最长递增子序列的长度
 * lenList代表了每个节点的最长递增子序列的个数
 */
var findNumberOfLIS = function(nums) {
  const len = nums.length;
  // 边界条件处理
  if (len <= 1) return len;
  // 变量初始化
  let dp = new Array(len).fill(1), lenList = new Array(len).fill(1), max = 1, res = 0;
  for (let i = 1; i < len; i ++) {
    for (let j = i - 1; j >= 0; j --) {
      if (nums[i] > nums[j]) {
        // 不但需要处理最长序列的长度，也需要处理个数
        const curVal = 1 + dp[j];
        if (curVal > dp[i]) {
          // 记录较大的最长序列长度
          dp[i] = curVal;
          // 最长序列长度增加了，个数还是一样的，直接获取上一个递增元素的最大个数
          lenList[i] = lenList[j];
        } else if (curVal === dp[i]) {
          // 如果两个值一样，说明该节点之前已经存在相应长度的最长序列，
          // 所以给该节点的最大个数值加上上一个递增元素的最大个数
          lenList[i] += lenList[j];
        }
      }
    }
    max = Math.max(max, dp[i]);
  }
  // 因为最长序列的解答最后一位值的存在顺序并不确定，所以需要遍历一遍
  // 遍历所有最长序列长度等于最大值的节点，将它们的最长序列个数相加
  for(let i = 0; i < len; i ++){
    if (dp[i] === max) res += lenList[i];
  }
  return res;
};

// console.log(findNumberOfLIS([1,3,5,4,7]));
// console.log(findNumberOfLIS([2,2,2,2,2]));
console.log(findNumberOfLIS([1,2,4,3,5,4,7,2]));
