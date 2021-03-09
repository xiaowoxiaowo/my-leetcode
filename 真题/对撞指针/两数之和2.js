/***
 * leetcode 167
 * 给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
 * 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 
 * 例1：
 * 输入: numbers = [2,7,11,15], target = 9
 * 输出: [1,2]
 * 
 * 例2:
 * 输入：numbers = [2,3,4], target = 6
 * 输出：[1,3]
 * 
 */

import { pritnf } from '../../src/utils';

var twoSum = function(numbers, target) {
	const len = numbers.length;
	if (len < 2) return -1;
	let l = 0, r = len - 1;
	while(l < r) {
		if (numbers[l] + numbers[r] === target) {
			return [l + 1, r + 1];
		} else if (numbers[l] + numbers[r] > target) {
			r --;
		} else {
			l ++;
		}
	}
	return -1;
};

pritnf(twoSum([2,7,11,15], 9), 2);