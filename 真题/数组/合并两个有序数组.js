/***
 * leetcode 88
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
 * 
 * 例1：
 * 输入: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出: [1,2,2,3,5,6]
 * 
 * 例2:
 * 输入：nums1 = [1], m = 1, nums2 = [], n = 0
 * 输出：[1]
 * 
 * 思路: 归并排序
 */
import { swap, pritnf } from '../../src/utils';

// var merge = function(nums1, m, nums2, n) {
// 	if (n === 0) return nums1;
// 	const newNums1 = nums1.slice();
// 	let l = 0;
// 	let r = 0;
// 	for (let i = 0; i < m + n; i ++) {
// 		if (l >= m) {
// 			nums1[i] = nums2[r];
// 			r++;
// 		} else if (r >= n) {
// 			nums1[i] = newNums1[l];
// 			l++;
// 		} else if (newNums1[l] > nums2[r]) {
// 			nums1[i] = nums2[r];
// 			r++;
// 		} else {
// 			nums1[i] = newNums1[l];
// 			l++;
// 		}
// 	}
// };

// 从后往前遍历，可以减少命名空间的内存占用
var merge = function(nums1, m, nums2, n) {
	if (n === 0) return nums1;
	let p = m + n - 1;
	m--;
	n--;
	for (let i = p; i >= 0; i --) {
		if (m < 0) {
			nums1[i] = nums2[n];
			n--;
		} else if (n < 0) {
			nums1[i] = nums1[m];
			m--;
		} else if (nums1[m] > nums2[n]) {
			nums1[i] = nums1[m];
			m--;
		} else {
			nums1[i] = nums2[n];
			n--;
		}
	}
};

// 进一步优化
const merge2 = function(nums1, m, nums2, n) {
  if (n === 0) return nums1;
	let k = m + n - 1;
	m--;
	n--;
  // 当两个数组都没遍历完时，指针同步移动
  while(m >= 0 && n >= 0) {
		// 取较大的值，从末尾往前填补
		if(nums1[m] >= nums2[n]) {
				nums1[k] = nums1[m];
				m--;
				k--;
		} else {
				nums1[k] = nums2[n];
				n--;
				k--;
		}
  }
  
  // nums2 留下的情况，特殊处理一下。当n排序完成，m肯定已经排序完成。因为是把n数组排序到m数组中
  while(n >= 0) {
      nums1[k] = nums2[n];
      k--;
      n--;
  }
};

var test = [1,2,3,0,0,0];

merge2(test, 3, [2,5,6], 3);
pritnf(test, 2);