/***
 * leetcode 121
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 * 
 * 输入：[7,1,5,3,6,4]
 * 输出：5
 * 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 * 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
 * 
 */
// 初始化实现，循环有点多，空间复杂度有点高，可以进行优化
var maxProfit = function(prices) {
  const len = prices.length;
  if (len <= 1) return 0;

  let arrL = new Array(len).fill(Infinity);
  arrL[0] = prices[0];
  for (let i = 1; i < len; i ++) {
    arrL[i] = Math.min(arrL[i - 1], prices[i]);
  }

  let arrR = new Array(len).fill(-Infinity);
  arrR[len - 1] = prices[len - 1];
  for (let i = len - 2; i >= 0; i --) {
    arrR[i] = Math.max(arrR[i + 1], prices[i]);
  }

  let max = 0;
  max = arrR[0] - arrL[0];
  for (let i = 0; i < len; i ++) {
    max = Math.max(max, arrR[i] - arrL[i]);
  }

  return max > 0 ? max : 0;
};

console.log(maxProfit([7,1,5,3,6,4]));

// 动态规划，状态机，定义两个状态，一个卖出的状态，一个买入的状态
const maxProfit = function(prices) {
  const len = prices.length;
  if (len <= 1) return 0;
  // dp定义为当前节点的最大卖出或者买入的值
  let dpOut = 0, dpIn = prices[0];
  for (let i = 1; i < len; i ++) {
    // 取上一个最大卖出值和当前节点值 - 上一个节点的最小买入值的较大值
    dpOut = Math.max(dpOut, prices[i] - dpIn);
    // 最小买入值
    dpIn = Math.min(dpIn, prices[i]);
  }
  return dpOut;
}


























const maxProfit = function(prices) {
  let n = prices.length
  let profit_out = 0
  let profit_in = -prices[0]
  for (let i = 1; i < n; i++) {
    profit_out = Math.max(profit_out, profit_in + prices[i])
    profit_in = Math.max(profit_in,  -prices[i])
  }
  return profit_out
}
