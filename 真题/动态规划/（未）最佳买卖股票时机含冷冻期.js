/***
 * leetcode 309
 * 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​
 * 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
 * - 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * - 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 * 
 * 
 * 例1：
 * 输入：[1,2,3,0,2]
 * 输出：3
 * 解释：对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]
 * 
 * 输入：[1,2,3,15,70]
 * 输出：69
 * 
 * 输入：[1,2,5,3,2,30]
 * 输出：32
 * 
 * 
 * 解题思路：
 */
var maxProfit = function(prices) {
  let len = prices.length;
  if (len <= 1) return 0;
  let dp = new Array(len).fill(0), res = 0;
  for (let i = 1; i < len; i ++) {
    for (let j = i - 1; j >= 0; j --) {
      const preVal = (j >= 3) ? dp[j - 2] : 0;
      dp[i] = Math.max(dp[i], prices[i] - prices[j] + preVal);
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

console.log(maxProfit([1,2,3,0,2]));
console.log(maxProfit([1,2,3,15,70]));
console.log(maxProfit([1,2,5,3,2,30]));