/***
 * leetcode 27
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 
 * 例：
 * 输入: nums = [3,2,2,3], val = 3
 * 输出: 2
 * 
 * 1.必须在原数组上操作，不能拷贝额外的数组。
 * 2.元素的顺序可以改变。
 * 
 * 思路: 跟移除零一样，使用双指针。
 */

import { swap } from '../../src/utils';

var removeElement = function(nums, val) {
	const len = nums.length;
	let j = 0;
	for (let i = 0; i < len; i++) {
			if (nums[i] != val) {
				nums[j++] = nums[i];
			}
	}
	return j;
};