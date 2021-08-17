/***
 * leetcode 1049 最后一块石头的重量 II
 * 
 * 有一堆石头，用整数数组 stones 表示。其中 stones[i] 表示第 i 块石头的重量。
 * 每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
 *  - 如果 x == y，那么两块石头都会被完全粉碎；
 *  - 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 * 
 * 最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。
 * 
 * 
 * 输入：stones = [2,7,4,1,8,1]
 * 输出：1
 * 解释：
 * 组合 2 和 4，得到 2，所以数组转化为 [2,7,1,8,1]，
 * 组合 7 和 8，得到 1，所以数组转化为 [2,1,1,1]，
 * 组合 2 和 1，得到 1，所以数组转化为 [1,1,1]，
 * 组合 1 和 1，得到 0，所以数组转化为 [1]，这就是最优值。
 * 
 * 输入：stones = [31,26,33,21,40]
 * 输出：5
 * 
 * 输入：stones = [1,2]
 * 输出：1
 */

// 思路需要把这题转为背包问题，假设sum为stones里所有数据之和
// 如果 x === y,相当于x或者y中其中一个数据为负
// 如果 x <= y，这里会产生一个新的石头n = y - x。如果这个新石头后续n === x或者n >= x，都可以看成这里的两个x为负数
// 所以，所求的最小可能重量，其实就是求从stones中取出元素来尽可能的塞满sum / 2
// 这样就转化成了经典的0-1背包问题，元素的重量和价值都是stones[i],背包容量为sum / 2
var lastStoneWeightII = function(stones) {
  const len = stones.length;
  if (len === 0) return 0;
  if (len === 1) return stones[0];
  let sum = stones.reduce((a, b) => a + b, 0);
  let max = Math.floor(sum / 2);
  const dp = new Array(max + 1).fill(0);
  for (let i = 0; i < len; i ++) {
    for (let j = max; j >= stones[i]; j--) {
      if (i === 0) {
        // 初始化，只要背包容量j >= 石头的重量stones[i]，就可以给dp[j]赋值为石头的价值stones[i]
        dp[j] = stones[0];
      } else {
        // 核心状态转移方程
        dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
      } 
    }
  }
  return sum - 2 * dp[max];
};

console.log(lastStoneWeightII([1,2]));








var lastStoneWeightII = function(stones) {
	const len = stones.length;
	const sum = stones.reduce((pre, cur) => pre + cur, 0);
	const T = Math.floor(sum / 2);
	const dp = new Array(T + 1).fill(0);
	for (let i = 0; i < len; i ++) {
		for (let j = T; j >= stones[i]; j--) {
			dp[j] = Math.max(dp[j], stones[i] + dp[j - stones[i]]);
		}
	}
	return sum - dp[T] * 2;
}