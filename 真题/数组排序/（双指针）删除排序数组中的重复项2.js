/***
 * leetcode 80
 * 给定一个增序排列数组 nums ，你需要在 原地 删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 
 * 例：
 * 输入: nums = [0,0,1,1,1,1,2,3,3]
 * 输出: 7, nums = [0,0,1,1,2,3,3]
 * 
 * 
 * 思路: 双指针。
 */
var removeDuplicates = function(nums) {
	const len = nums.length;
	let j = 2;
	for (let i = 2; i < len; i++) {
		if (nums[i] !== nums[j - 2]) {
			nums[j++] = nums[i];
		}
	}
	return j;
};