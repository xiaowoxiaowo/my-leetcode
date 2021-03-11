/***
 * leetcode 220
 * 在整数数组 nums 中，是否存在两个下标 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值小于等于 t ，
 * 且满足 i 和 j 的差的绝对值也小于等于 ķ 。
 * 如果存在则返回 true，不存在返回 false。
 * 
 * 
 * 例1：
 * 输入: nums = [1,2,3,1], k = 3, t = 0
 * 输出: true
 * 
 * 例2:
 * 输入：nums = [1,0,1,1], k = 1, t = 2
 * 输出：true
 * 
 * 例3:
 * 输入：nums = [1,5,9,1,5,9], k = 2, t = 3
 * 输出：false
 * 
 * 解题思路：
 * 其他部分跟 存在重复元素2 解法一致，本题重点在于差绝对值小于等于t上，因为js的Map对象没有现成的方法用于此题，所以需要手动解决。
 * 主要是把存入的key值（数组的整数）除t + 1，得到一个间隔的次数，在这个次数的+1和-1的范围内，有可能存在符合要求的参数。
 * 如果查找表中的key值一致，属于同一个间隔，符合要求。如果是在+1和-1的范围内，还需要再次验证，是否<= t。如果是，返回。
 */

var containsNearbyAlmostDuplicate = function(nums, k, t) {
	function getId(x) {
		// 这里t + 1是为了防止t为零的情况
		return Math.floor(x / (t + 1));
	}
	let i = 0, map = new Map(), m;
	while(i < nums.length) {
		// 得到整数的关于t的间隔数
		m = getId(nums[i]);
		if (map.has(m)) return true;
		if (map.has(m + 1) & Math.abs(map.get(m + 1) - nums[i]) <= t) return true;
		if (map.has(m - 1) & Math.abs(map.get(m - 1) - nums[i]) <= t) return true;
		// 把间隔数作为key，整数值作为value存入查找表
		map.set(m, nums[i]);
		// 滑动窗口宽度大于k了，删除最左边的元素。
		if (map.size > k) map.delete(getId(nums[i - k]));
		i++;
	}
	return false;
};