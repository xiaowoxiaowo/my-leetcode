/***
 * leetcode 219
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，
 * 使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
 * 
 * 
 * 例1：
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 * 
 * 例2:
 * 输入：nums = [1,0,1,1], k = 1
 * 输出：true
 * 
 * 例3:
 * 输入：nums = [1,2,3,1,2,3], k = 2
 * 输出：false
 * 
 * 解题思路：
 * 通过滑动窗口，保持 查找表 里的数据间隔小于等于k。 
 */

var containsNearbyDuplicate = function(nums, k) {
	let i = 0, map = new Map();
	while(i < nums.length) {
		if (map.has(nums[i])) {
			return true;
		}
		map.set(nums[i], 1);
		if (map.size > k) map.delete(nums[i - k]);
		i++;
	}
	return false;
};