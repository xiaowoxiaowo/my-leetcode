/***
 * leetcode 350
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 例1：
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2, 2]
 * 
 * 例2:
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
 * 
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
 * 我们可以不考虑输出结果的顺序。
 * 
 */

function getIntersect(minList, maxList) {
	const listMap = new Map(), res = [];
	for(let i = 0; i < minList.length; i++) {
		const c = minList[i];
		listMap.set(c, listMap.has(c) ? listMap.get(c) + 1 : 1);
	}
	for(let j = 0; j < maxList.length; j++) {
		const c = maxList[j];
		if (listMap.has(c)) {
			res.push(c);
			if (listMap.get(c) === 1) {
				listMap.delete(c);
			} else {
        listMap.set(c, listMap.get(c) - 1);
      }
		}
		if (listMap.size === 0) {
			break;
		}
	}
	return res;
}

var intersect = function(nums1, nums2) {
	if (nums1.length > nums2.length) {
		return getIntersect(nums2, nums1);
	}
	return getIntersect(nums1, nums2);
};



// 假如两个数组都是有序的，可以使用双指针的思路，有更好的性能
const intersect = (nums1, nums2) => {
  const res = [];
  let p1 = 0;                  // p1扫描nums1
  let p2 = 0;                  // p2扫描nums2
  while (p1 < nums1.length && p2 < nums2.length) { // 用&& 因为有一个越界就不能找交集
    if (nums1[p1] > nums2[p2]) { // p1指向的数大，移动p2，期待扫到一样大的
      p2++;
    } else if (nums1[p1] < nums2[p2]) { // p2指向的数大，移动p1，期待扫到一样大的
      p1++;
    } else {                   // 遇到相同的，推入res数组，两指针均右移考察下一个
      res.push(nums1[p1]);
      p1++;
      p2++;
    }
  }
  return res;
};