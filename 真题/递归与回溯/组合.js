/***
 * leetcode 77
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 
 * 例1：
 * 输入: n = 4, k = 2
 * 输出：
 * [
 * [2,4],
 * [3,4],
 * [2,3],
 * [1,2],
 * [1,3],
 * [1,4],
 * ]
 * 
 * 解题思路：
 * 递归回溯
 */

var combine = function(n, k) {
	if (n < k || n <= 0 || k <= 0) return [];
	let res = [];
	const loop = (index, arr) => {
		if (arr.length === k) return res.push(arr);
		// 这类问题的关键都在于每层递归中的边界情况,每次遍历都需要留出剩余的k数量的元素（剪枝）
		for (let i = index; i <= n - k + arr.length + 1; i ++) {
			loop(i + 1, [...arr, i]);
		}
	};
	loop(1, []);
	return res;
};