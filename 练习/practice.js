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
<<<<<<< HEAD

var canPlaceFlowers = function(flowerbed, n) {
  const len = flowerbed.length;
	let sum = 0;
	let prev = -1;
  for (let i = 0; i < len; i ++) {
		if (flowerbed[i] === 1) {
			if (prev < 0) {
				sum += Math.floor(i / 2);
			} else {
				sum += Math.floor((i - prev - 2) / 2);
			}
			if (sum >= n) return true;
			prev = i;
		}
	}
	if (prev < 0) {
		sum += Math.floor((len + 1) / 2);
	} else {
		sum += Math.floor((len - prev - 1) / 2);
	}
	return sum >= n;
};

console.log(canPlaceFlowers([0], 1));
=======
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
>>>>>>> 48c0d35c20e59e1f46eb43b0daa31396189f56f1
