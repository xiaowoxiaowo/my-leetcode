/***
 * leetcode 454
 * 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。
 * 为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过 231 - 1 。
 * 
 * 
 * 
 * 例1：
 * 输入: 
 * A = [ 1, 2]
 * B = [-2,-1]
 * C = [-1, 2]
 * D = [ 0, 2]
 * 输出: 2
 * 
 * 
 * 思路：将C+D的每一种可能放入查找表：O(n^2)。查找表尽量使用Map类型，会比对象类型速度快不少
 */

var fourSumCount = function(A, B, C, D) {
	let map = new Map(), res = 0;
	for (let i = 0; i < A.length; i ++) {
		for (let j = 0; j < B.length; j ++) {
			let sum = A[i] + B[j];
			map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
		}
	}

	for (let i = 0; i < C.length; i ++) {
		for (let j = 0; j < D.length; j ++) {
			let sum = C[i] + D[j];
			if (map.has(-sum)) {
				res = res + map.get(-sum);
			}
		}
	}

	return res;
};