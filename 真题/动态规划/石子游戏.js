/**
 * leetcode 877. 
 *
 * 亚历克斯和李用几堆石子在做游戏。偶数堆石子排成一行，每堆都有正整数颗石子 piles[i] 。
 * 游戏以谁手中的石子最多来决出胜负。石子的总数是奇数，所以没有平局。
 * 亚历克斯和李轮流进行，亚历克斯先开始。 每回合，玩家从行的开始或结束处取走整堆石头。 
 * 这种情况一直持续到没有更多的石子堆为止，此时手中石子最多的玩家获胜。
 * 假设亚历克斯和李都发挥出最佳水平，当亚历克斯赢得比赛时返回 true ，当李赢得比赛时返回 false 。
 * 
 * 输入：[5,3,4,5]
 * 输出：true
 * 解释：
 * 亚历克斯先开始，只能拿前 5 颗或后 5 颗石子 。
 * 假设他取了前 5 颗，这一行就变成了 [3,4,5] 。
 * 如果李拿走前 3 颗，那么剩下的是 [4,5]，亚历克斯拿走后 5 颗赢得 10 分。
 * 如果李拿走后 5 颗，那么剩下的是 [3,4]，亚历克斯拿走后 4 颗赢得 9 分。
 * 这表明，取前 5 颗石子对亚历克斯来说是一个胜利的举动，所以我们返回 true 。
 * 
 * 说明：
 * 2 <= piles.length <= 500
 * piles.length 是偶数。
 * 1 <= piles[i] <= 500
 * sum(piles) 是奇数。
 * 
 */

// 动态规划思路，每次从左或右取一堆石子，其实类似递归，我们可以从底向上进行动态规划
// 这里的dp[i][j]，定义的是在[i...j]这堆石子中，如果亚里克斯先拿，他跟李的石子差值是多少
// 如果i === j时，只剩下一堆石子，亚里克斯 - 李 = piles[i]
// 如果i < j时，存在两种选择，取最左侧的石子piles[i]或者取最右侧的石子piles[j]
// 取了最左侧或者最右侧的石子之后，接下来换李取石子，李也是使用最优策略，所以需要减去dp[i + 1][j]或者dp[i][j - 1]
// 状态转移方程Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1]);
var stoneGame = function(piles) {
	const len = piles.length;
	// 定义二维数组dp
	const dp = new Array(len).fill(0).map(v => new Array(len).fill(0));
	// 初始化数据，因为当i === j时，只剩下一堆石子，亚里克斯 - 李 = piles[i]
	for (let i = 0; i < len; i ++) {
		dp[i][i] = piles[i];
	}
	// 动态规划遍历，从len - 2开始，往上一层一层遍历
	for (let i = len - 2; i >= 0; i--) {
		for (let j = i + 1; j < len; j++) {
			// 核心状态转移方程
			dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1]);
		}
	}
	return dp[0][len - 1] > 0;
};