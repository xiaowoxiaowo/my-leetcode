/***
 * leetcode 283
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 例：
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 1.必须在原数组上操作，不能拷贝额外的数组。
 * 2.尽量减少操作次数。
 * 
 * 思路: 通过双指针的方式，用i参数遍历,用j参数记录当前非零参数的位数。
 * 每次遍历到非零，将当前位置和j位置的数据交换，并将j加1。
 */
import { swap } from '../../src/utils';

 function moveZeroes(nums) {
	const len = nums.length;
	let j = 0;
	for (let i = 0; i < len; i++) {
			if (nums[i]) {
				swap(nums, j++, i);
			}
	}
	return nums;
};