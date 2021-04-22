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
	intervals = intervals.sort((a, b) => a[0] - b[0]);
	// 这个dp代表每个以i节点值作为终点的最长无重叠区间长度
	let dp = new Array(len).fill(1), res = 1;
	for (let i = 1; i < len; i ++) {
		for (let j = i; j >= 0; j --) {
			const cl = intervals[j].length;
			if (intervals[i][0] >= intervals[j][cl - 1]) {
				dp[i] = Math.max(dp[i], 1 + dp[j]);
			}
		}
		res = Math.max(res, dp[i]);
	}
	return len - res;
};

// 使用贪心算法进行优化
// 每个区间的结尾越小，留给后面的空间也就越大
// 按照区间的结尾排序，每次选择结尾最早的，且和前一个区间不重叠的区间
var eraseOverlapIntervals = function(intervals) {
	const len = intervals.length;
	if (len === 0 || len === 1) return 0;
	// 排序，终点从小到大排列
	intervals = intervals.sort((a, b) => a[1] - b[1]);
	let res = 1, pre = 0;
	// 因为数组现在是按终点大小从小到大排序的，所以如果后一个节点满足起点大于等于前一个节点的终点
	// 该解其实就是最优解，因为他们的结尾都是当前数组中最小的
	for (let i = 1; i < len; i ++) {
		if (intervals[i][0] >= intervals[pre][1]) {
			res ++;
			pre = i;
		}
	}
	return len - res;
}