/***
 * leetcode 52
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给你一个整数 n ，，返回 n 皇后问题 不同的解决方案的数量。
 * 
 * 说明：
 * 1 <= n <= 9
 * 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
 * 除了 N皇后 的解法外，是否有优化的解法？
 * 
 * 例1：
 * 输入: n = 4
 * 输出：2
 * 
 * 输入：n = 1
 * 输出：1
 * 
 * 解题思路：
 *  N皇后 的思路，比较简单，不做分析了
 */
var totalNQueens = function(n) {
	if (n === 1) return 1;
	let res = 0;
	// 设置列，斜线的记录点
	const col = new Array(n).fill(false);
	const dia1 = new Array(2 * n - 1).fill(false);
	const dia2 = new Array(2 * n - 1).fill(false);
	// 递归方法
	const loop = (level) => {
		// 终止条件，当level行数等于n时，即当前链路已经递归完成，将结果推入res中
		if (level === n) return res++;
		// 每一行都循环n个位置
		for (let i = 0; i < n ; i ++) {
			// 判断三个条件，列，两条斜线是否已经被使用,这里的level - i + n - 1是为了让数组从0开始计数
			if (!col[i] && !dia1[level + i] && !dia2[level - i + n - 1]) {
				// 将使用过的值置为true，继续递归
				col[i] = true;
				dia1[level + i] = true;
				dia2[level - i + n - 1] = true;
				loop(level + 1);
				// 回溯
				col[i] = false;
				dia1[level + i] = false;
				dia2[level - i + n - 1] = false;
			}
		}
	};
	loop(0);
	return res;
};