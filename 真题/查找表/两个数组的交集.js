/***
 * leetcode 349
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 例1：
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2]
 * 
 * 例2:
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 
 */

const set_intersection = (set1, set2) => {
	if (set1.size > set2.size) {
			return set_intersection(set2, set1);
	}
	const intersection = new Set();
	for (const num of set1) {
			if (set2.has(num)) {
					intersection.add(num);
			}
	}
	return [...intersection];
}

var intersection = function(nums1, nums2) {
	const set1 = new Set(nums1);
	const set2 = new Set(nums2);
	return set_intersection(set1, set2);
};