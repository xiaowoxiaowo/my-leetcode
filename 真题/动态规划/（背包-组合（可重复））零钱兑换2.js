/***
 * leetcode 518
 * 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 
 * 
 * 
 * 输入：amount = 5, coins = [1, 2, 5]
 * 输出：4
 * 解释: 有四种方式可以凑成总金额:
 * 5=5
 * 5=2+2+1
 * 5=2+1+1+1
 * 5=1+1+1+1+1
 * 
 * 输入：amount = 3, coins = [2]
 * 输出：0
 * 解释: 只用面额2的硬币不能凑成总金额3。
 * 
 * 输入：amount = 10, coins = [10] 
 * 输出：1
 * 
 * 
 * 解题思路：
 * 跟 零钱兑换 相比较，只是换了一个求得结果，这里求得是组合数量。更换一下核心的状态转移方程即可
 * dp[i] += dp[j - nums]
 */
var change = function(amount, coins) {
  const len = coins.length;
  // 边界条件处理
  if (len === 0) return amount === 0 ? 1 : 0;
  // dp代表当amount为[1,2,3,4....]值时，可取coins中元素的组合值
  const dp = new Array(amount + 1).fill(0);
  for (let i = 0; i <= amount; i ++) {
    // 初始化当x轴为0，即只取coins中的第一个元素时，将可以整除的数设为1
    if ((i % coins[0]) === 0) dp[i] = 1;
  }
  for (let i = 1; i < len; i ++) {
    for (let j = 1; j <= amount; j ++) {
      if (j >= coins[i]) {
        // 核心状态转移方程修改
        dp[j] += dp[j - coins[i]];
      }
    }
  }
  return dp[amount];
};

console.log(change(5, [1, 2, 5]));
console.log(change(3, [2]));