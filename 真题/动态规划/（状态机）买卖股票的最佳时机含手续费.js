/***
 * leetcode 714
 * 给定一个整数数组 prices，其中第 i 个元素代表了第 i 天的股票价格 ；非负整数 fee 代表了交易股票的手续费用。
 * 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
 * 返回获得利润的最大值。
 * 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
 * 
 * 输入: prices = [1, 3, 2, 8, 4, 9], fee = 2
 * 输出: 8
 * 解释: 能够达到的最大利润:  
 * 在此处买入 prices[0] = 1
 * 在此处卖出 prices[3] = 8
 * 在此处买入 prices[4] = 4
 * 在此处卖出 prices[5] = 9
 * 总利润: ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
 * 
 */
// 动态规划，状态机思路，相比于 股票价格2 的题目，多了一个手续费
// 一次交易只需要交一次手续费，可以把手续费加到买入的时候
var maxProfit = function(prices, fee) {
  const len = prices.length;
  if (len < 2) return 0;
  let dp = [-prices[0] - fee, 0];
  for (let i = 1; i < len; i ++) {
    const [maxIn, maxOut] = dp;
    dp[1] = Math.max(maxOut, maxIn + prices[i]);
    dp[0] = Math.max(maxIn, maxOut - prices[i] - fee);
  }
  return dp[1];
};

console.log(maxProfit([1,3,7,5,10,3], 3));
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));