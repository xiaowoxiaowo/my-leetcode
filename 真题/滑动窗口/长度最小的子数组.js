/***
 * leetcode 209
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
 * 并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * 
 * 例1：
 * 输入: target = 7, nums = [2,3,1,2,4,3]
 * 输出: 2
 * 
 * 例2:
 * 输入：target = 4, nums = [1,4,4]
 * 输出：1
 * 
 * 例3:
 * 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
 * 输出：0
 * 
 */

var minSubArrayLen = function(target, nums) {
	const len = nums.length;
	if (len < 1) return 0;
	let l = 0, r = 0, sum = 0, minLen = len + 1;
	while(r < len) {
		sum += nums[r];
		while (sum >= target) {
			minLen = Math.min(minLen, r - l + 1);
			sum -= nums[l];
			l++;
		}
		r++;
	}

	return minLen === len + 1 ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));