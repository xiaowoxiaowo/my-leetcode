/***
 * leetcode 879 盈利计划
 * 
 * 给定不同面额的硬币和一个总金额。写出函数来计算可以凑成总金额的硬币组合数。假设每一种面额的硬币有无限个。 
 * 
 * 输入: amount = 5, coins = [1, 2, 5]
 * 输出: 4
 * 解释: 有四种方式可以凑成总金额:
 * 5=5
 * 5=2+2+1
 * 5=2+1+1+1
 * 5=1+1+1+1+1
 * 
 * 输入: amount = 3, coins = [2]
 * 输出: 0
 * 解释: 只用面额2的硬币不能凑成总金额3。
 * 
 */
var change = function(amount, coins) {
	const len = coins.length;
	if (amount === 0) return 1;
	if (len === 1) return (amount % coins[0] === 0) ? 1 : 0;
	const dp = new Array(amount + 1).fill(0);
	for (let i = 0; i <= amount; i ++) {
    if ((i % coins[0]) === 0) dp[i] = 1;
  }
	for (let i = 1; i < len; i ++) {
		for (let j = coins[i]; j <= amount; j ++) {
			dp[j] += dp[j - coins[i]];
		}
	}
	return dp[amount];
}

console.log(change(5, [1, 2, 5]));