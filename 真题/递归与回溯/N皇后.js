/***
 * leetcode 51
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 * 
 * 说明：
 * 1 <= n <= 9
 * 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
 * 
 * 例1：
 * 输入: n = 4
 * 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * 
 * 输入：n = 1
 * 输出：[["Q"]]
 * 
 * 解题思路：
 * 思路其实很简单，就是一个递归回溯的过程。从第一行开始，不断向下递归，直到最后一行，把结果推入res中。
 * 本题的难点在于位置的选择，任何两个皇后都不能处于同一条横行、纵行或斜线上。
 * 所以每次选择位置，我们都需要判断是否在同一列，斜线上。
 * 同一列比较简单，用一个数组来记录下使用过的列即可。
 * 斜线，我们需要判断两条，一条是右上到左下(斜线1)，一条是左上到右下（斜线2）。
 * 如下图
 * 00 01 02 03
 * 10 11 12 13
 * 20 21 22 23
 * 斜线1有这样的规律，i + j都相等
 * 斜线2有这样的规律, i - j都相等
 * 使用这样的规律，我们就能判断两个位置是否在同一斜线上了
 */
var solveNQueens = function(n) {
	if (n === 1) return [["Q"]];
	const res = [];
	// 设置列，斜线的记录点
	const col = new Array(n).fill(false);
	const dia1 = new Array(2 * n - 1).fill(false);
	const dia2 = new Array(2 * n - 1).fill(false);
	const tmp = new Array(n).fill('.');
	// 递归方法
	const loop = (level, arr) => {
		// 终止条件，当level行数等于n时，即当前链路已经递归完成，将结果推入res中
		if (level === n) return res.push(arr);
		// 每一行都循环n个位置
		for (let i = 0; i < n ; i ++) {
			// 判断三个条件，列，两条斜线是否已经被使用,这里的level - i + n - 1是为了让数组从0开始计数
			if (!col[i] && !dia1[level + i] && !dia2[level - i + n - 1]) {
				// 将使用过的值置为true，继续递归
				col[i] = true;
				dia1[level + i] = true;
				dia2[level - i + n - 1] = true;
				const t = [...tmp];
				t[i] = 'Q';
				loop(level + 1, [...arr, t.join('')]);
				// 回溯
				col[i] = false;
				dia1[level + i] = false;
				dia2[level - i + n - 1] = false;
			}
		}
	};
	loop(0, []);
	return res;
};