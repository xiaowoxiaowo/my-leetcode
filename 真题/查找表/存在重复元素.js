/***
 * leetcode 217
 * 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。
 * 
 * 
 * 例1：
 * 输入: [1,2,3,1]
 * 输出: true
 * 
 * 例2:
 * 输入：[1,2,3,4]
 * 输出：true
 * 
 * 例3:
 * 输入：[1,1,1,3,3,4,3,2,4,2]
 * 输出：true
 * 
 */

var containsDuplicate = function(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i ++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i]);
  }
  return false;
};