/***
 * leetcode 188
 * 给定一个整数数组 prices ，它的第 i 个元素 prices[i] 是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * 输入：k = 2, prices = [2,4,1]
 * 输出：2
 * 解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。
 * 
 * 输入：k = 2, prices = [3,2,6,5,0,3]
 * 输出：7
 * 解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。
 * 随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。
 * 
 * 
 */
// 动态规划，状态机思路，在 买卖股票的最佳时机3 题目的基础上进行拓展。
// 因为是k笔交易，所以需要定义dp为一个二维数组，每个数组的第一项代表第i次买卖的买操作，第二项代表第i次买卖的卖操作
// 可以参照 3 题目中的状态写出遍历过程

// 完成一次买，对于当前节点，可以买，也可以不买，取较大值
// dp[0] = Math.max(buy1, -prices[i]);
// 完成一次买卖，可以卖，也可以不卖，取较大值
// dp[1] = Math.max(sale1, buy1 + prices[i]);
// 完成一次买卖之后完成第二次买，可以买，也可以不买，取较大值
// dp[2] = Math.max(buy2, sale1 - prices[i]);
// 完成两次买卖,可以卖，也可以不卖，取较大值
// dp[3] = Math.max(sale2, buy2 + prices[i]);

var maxProfit = function(k, prices) {
  const len = prices.length;
  if (len < 2 || k < 1) return 0;
  let dp = new Array(k).fill(0).map(v => [-prices[0], 0]);
  for (let i = 1; i < len; i ++) {
    let perSale = 0;
    for (let j = 0; j < k; j ++) {
      const [buy, sale] = dp[j];
      dp[j][0] = Math.max(buy, perSale - prices[i]);
      dp[j][1] = Math.max(sale, buy + prices[i]);
      perSale = sale;
    }
  }
  return dp[k - 1][1];
};

console.log(maxProfit(2, [3,2,6,5,0,3]));