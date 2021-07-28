/**
 * leetcode 169. 多数元素
 * 
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 * 
 * 输入：[3,2,3]
 * 输出：3
 * 
 * 输入：[2,2,1,1,1,2,2]
 * 输出：2
 * 
 */
var majorityElement = function(nums) {
  let curItem = [0, ''];
  for (const val of nums) {
    if (!curItem[0]) {
      curItem[0] = 1;
      curItem[1] = val;
    } else {
      if (curItem[1] === val) {
        curItem[0]++;
      } else {
        curItem[0]--;
      }
    }
  }
  return curItem[1];
};