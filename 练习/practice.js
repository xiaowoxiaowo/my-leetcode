/***
 * leetcode 879 盈利计划
 * 
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
 * 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。
 * 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。
 * 例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
 * 
 * 输入：n = 12
 * 输出：3 
 * 解释：12 = 4 + 4 + 4
 * 
 * 输入：n = 13
 * 输出：2
 * 解释：13 = 4 + 9
 */

var numSquares = function(n) {
	const dp = new Array(n + 1).fill(0);
	for (let i = 1; i <= n; i ++) {
		dp[i] = i;
		for (let j = 1; j * j <= i; j ++) {
			const sum = j * j;
			if ((i - sum) <= 1) {
				dp[i] = i - sum + 1;
				break;
			} else {
				dp[i] = Math.min(dp[i], 1 + dp[i - sum]);
			}
		}
	}
	return dp[n];
}

console.log(numSquares(12));
console.log(numSquares(13));