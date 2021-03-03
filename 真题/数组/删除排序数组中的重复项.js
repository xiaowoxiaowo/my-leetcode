/***
 * leetcode 26
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 
 * 例：
 * 输入: nums = [0,0,1,1,1,2,2,3,3,4]
 * 输出: 5
 * 
 * 1.必须在原数组上操作，不能拷贝额外的数组。
 * 2.元素的顺序可以改变。
 * 
 * 思路: 跟移除零一样，使用双指针。
 */

var removeDuplicates = function(nums) {
	const len = nums.length;
	let j = 0;
	for (let i = 1; i < len; i++) {
    if (nums[i] !== nums[j]) {
      nums[++j] = nums[i];
    }
	}
	return ++j;
};