/***
 * leetcode 11
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 例1：
 * 输入: [1,8,6,2,5,4,8,3,7]
 * 输出: 49
 * 
 * 例2:
 * 输入：[1,1]
 * 输出：1
 * 
 * 例3:
 * 输入: [1,2,1]
 * 输出: 2
 * 
 */
import { swap, pritnf } from '../../src/utils';

function getArea(h1, h2, len) {
	return (h1 > h2) ? (h2 * len) : (h1 * len);
}

var maxArea = function(height) {
	const len = height.length;
	if (len < 2) return 0;
	if (len === 2) return getArea(height[0], height[1], 1);
	let l = 0, r = len - 1, maxArea = 0;
	while(l < r) {
		let current = getArea(height[l], height[r], r - l);
		if (current > maxArea) {
			maxArea = current;
		}
		// 让左右之间高度较小的那个值进行移动，因为水的体积是按最短的高度来计算的
		if (height[l] > height[r]) {
			r--;
		} else {
			l++;
		}
	}
	return maxArea;
};

pritnf(maxArea([1,8,6,2,5,4,8,3,7]), 2);