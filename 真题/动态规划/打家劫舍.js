/***
 * leetcode 198
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * 
 * 
 * 例1：
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 输入：[2,7,9,3,1]
 * 输出：12
 * 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 * 
 * 解题思路：
 * 
 */
// 先用递归思路去实现，从顶向下
var rob = function(nums) {
	let len = nums.length;
	if (len === 0) return 0;
	if (len === 1) return nums[0];
	// 记忆化元素
	let memo = {};
	// 状态的定义，在[index, n - 1]的区间中寻找最大的组合
	const dfs = (index) => {
		if (index >= len) return 0;
		if (memo[index]) return memo[index];
		let res = 0;
		for (let i = index; i < len; i ++) {
			// 递归调用自身，在[index, n - 1]的区间中寻找最大的组合
			res = Math.max(res, nums[i] + dfs(i + 2));
		}
		memo[index] = res;
		return res;
	};
	return dfs(0);
};

// 动态规划，从底向上
var rob = function(nums) {
	let len = nums.length;
	if (len === 0) return 0;
	if (len === 1) return nums[0];
	// 这里的memo里对应index序号的项代表了[index, n - 1]这个区间中最大的组合值
	let memo = new Array(len).fill(-1);
	memo[len - 1] = nums[len - 1];
	// 从底向上开始遍历
	for (let i = len - 2; i >= 0; i --) {
		// 从当前节点向右遍历，寻找最大组合值
		for (let j = i; j < len; j ++) {
			// 判断数组序号是否越界
			const nextVal = (j + 2 >= len) ? 0 : memo[j + 2];
			// 获取[i, n - 1]区间中最大的组合值
			memo[i] = Math.max(memo[i], nums[j] + nextVal);
		}
	}
	return memo[0];
}