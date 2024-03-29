/***
 * leetcode 416
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 
 * 
 * 输入：nums = [1,5,11,5]
 * 输出：true
 * 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
 * 
 * 输入：nums = [1,2,3,5]
 * 输出：false
 * 解释：数组不能分割成两个元素和相等的子集。
 * 
 * 解题思路：
 * 动态规划的思路，背包问题相关，因为是分成两个子集，所以其实就是判断是否能够选出n个元素，和为sum/2。
 * 
 * n是元素个数,c其实就是sum/2，w对应元素值
 * 状态转移方程 F(n,c) = F(n - 1, c) || F(n - 1, c - w[i])
 */
// 递归回溯方法
var canPartition = function(nums) {
	let sum = 0, len = nums.length, memo = {};
	for (let i = 0; i < len; i ++) {
		sum = sum + nums[i];
	}
	if (sum % 2 !== 0) return false;
	const dfs = (index, remain) => {
		if (remain === 0) return true;
		if (index >= len || remain < 0) return false;
		const k = `${index}-${remain}`;
		if (memo[k] !== undefined) return memo[k];
		memo[k] = dfs(index + 1, remain) || dfs(index + 1, remain - nums[index]);
		return memo[k];
	};
	return dfs(0, sum / 2);
};

// 动态规划的思路,背包问题的思路，创建一个二维数组(这里使用空间优化思路，使用一个一维数组即可)
// 二维数组的y轴为容量，即为sum / 2
// 二维数组的x轴代表使用n个元素去相加
// dp代表当值i为1,2,3...sum/2时，是否存在一个或多个值相加可以等于i
var canPartition = function(nums) {
	// 初始化
	let sum = 0, len = nums.length;
	for (let i = 0; i < len; i ++) {
		sum = sum + nums[i];
	}
	if (sum % 2 !== 0) return false;
	let c = sum / 2;
	// 使用c(sum / 2)作为容量，创建一个c + 1的数组
	let dp = new Array(c + 1).fill(false);
	// 取出nums[0]的值，如果只取这一个值，初始化当i等于nums[0]的情况，dp[i]设为true
	// 初始化，当只取一个值的时候
	for (let i = 0; i <= c; i ++) {
		dp[i] = (nums[0] === i);
	}

	// 这里的i代表nums数组的元素个数，可以理解为当取2，3，4...个元素时
	// 计算它们的所有小于c情况的和，并存入到数组中，作为缓存
	for (let i = 1; i < len;i ++) {
		// 因为按正常的二维数组去遍，我们只需要使用上面以及左边的元素
		// 所以我们可以使用一个一维数组去优化背包的二维数组，所以这里要从大到小计算。
		for (let j = c; j >= nums[i]; j --) {
			dp[j] = dp[j] || dp[j - nums[i]];
		}
	}
	return dp[c];
}


/***
 * leetcode 416
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 * 
 * 
 * 输入：nums = [1,5,11,5]
 * 输出：true
 * 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
 * 
 * 输入：nums = [1,2,3,5]
 * 输出：false
 * 解释：数组不能分割成两个元素和相等的子集。
 * */
 var canPartition = function(nums) {
	 const len = nums.length;
	 if (len <= 1) return false;
	 if (len === 2) return nums[0] === nums[1];
	 const sum = nums.reduce((pre, cur) => pre + cur, 0);
	 if (sum % 2 !== 0) return false;
	 const T = sum / 2;
	 const dp = new Array(T + 1).fill(false);
	 dp[0] = true;
	 for (let i = 0; i < nums.length; i ++) {
		 for (let j = T; j >= nums[i]; j --) {
			 dp[j] = dp[j] || dp[j - nums[i]];
		 }
	 }
	 return dp[T];
 }