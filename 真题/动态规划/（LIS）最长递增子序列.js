/***
 * leetcode 300
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 
 * 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
 * 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 * 
 * 例1：
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 * 
 * 输入：nums = [0,1,0,3,2,3]
 * 输出：4
 * 
 * 输入：nums = [7,7,7,7,7,7,7]
 * 输出：1
 * 
 * 进阶：
 * 你可以设计时间复杂度为 O(n2) 的解决方案吗？
 * 你能将算法的时间复杂度降低到 O(n log(n)) 吗?
 * 
 * 解题思路：
 * 动态规划思路 O(n2)
 * LIS(i)表示在[0...i]的范围内，选择数组nums[i]可以获得的最长上升子序列的长度
 * 状态转移方程
 * LIS(i) = max(1 + LIS(j) if nums[i] > nums[j])
 * 每次都遍历一次当前节点之前的节点，当值小于当前值时，取当前值和遍历节点+1值中的较大值
 */
var lengthOfLIS = function(nums) {
	let len = nums.length;
	if (len === 0) return 0;
	if (len === 1) return 1;
	// dp表示以nums[i]结尾的最长上升子序列的长度
	let dp = new Array(len).fill(-1), res = 1;
	dp[0] = 1;
	for (let i = 1; i < len; i ++) {
		// 遍历该节点之前的元素
		for (let j = i - 1; j >= 0; j --) {
			if (nums[j] < nums[i]) {
				// 当遍历到的值小于当前值时，取两者的较大值
				dp[i] = Math.max(dp[i], 1 + dp[j]);
			}
		}
		// 如果前面的节点都比该节点大，将该节点设为1
		if (dp[i] === -1) {
			dp[i] = 1;
		} else {
			// 存储最大值
			res = Math.max(res, dp[i]);
		}
	}
	return res;
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS([0,1,0,3,2,3]));
console.log(lengthOfLIS([7,7,7,7,7,7,7]));