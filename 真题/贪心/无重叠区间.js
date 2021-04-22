/***
 * leetcode 435
 * 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
 * 
 * - 可以认为区间的终点总是大于它的起点。
 * - 区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。
 * 
 * 输入：[ [1,2], [2,3], [3,4], [1,3] ]
 * 输出：1
 * 解释: 移除 [1,3] 后，剩下的区间没有重叠。
 * 
 * 输入：[ [1,2], [1,2], [1,2] ]
 * 输出：2
 * 解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
 * 
 * 输入：[ [1,2], [2,3] ]
 * 输出：0
 * 解释: 你不需要移除任何区间，因为它们已经是无重叠的了。
 * 
 * 解题思路：
 * 
 */
// 动态规划,最长递增子序列思路
var eraseOverlapIntervals = function(intervals) {
	const len = intervals.length;
	if (len === 0 || len === 1) return 0;
	// 排序，起点从小到大排列，如果两个节点起点大小一致，按终点大小从小到大排列
	intervals = intervals.sort((a, b) => {
		if (a[0] !== b[0]) {
			return a[0] - b[0];
		} else {
			return a[a.length - 1] - b[b.length - 1];
		}
	});
	// 这个dp代表每个以i节点值作为终点的最长无重叠区间长度
	let dp = new Array(len).fill(-1), res = 1;
	dp[0] = 1;
	for (let i = 1; i < len; i ++) {
		for (let j = i; j >= 0; j --) {
			const cl = intervals[j].length;
			if (intervals[i][0] >= intervals[j][cl - 1]) {
				dp[i] = Math.max(dp[i], 1 + dp[j]);
			}
		}
		if (dp[i] === -1) {
			dp[i] = 1;
		} else {
			res = Math.max(res, dp[i]);
		}
	}
	return len - res;
};

// 使用贪心算法进行优化
var eraseOverlapIntervals = function(intervals) {
	const len = intervals.length;
	if (len === 0 || len === 1) return 0;
	intervals = intervals.sort((a, b) => {
		if (a[0] !== b[0]) {
			return a[0] - b[0];
		} else {
			return a[a.length - 1] - b[b.length - 1];
		}
	});

}