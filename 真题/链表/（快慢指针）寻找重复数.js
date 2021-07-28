/**
 * leetcode 287. 寻找重复数
 * 
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。
 * 假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。
 * 你设计的解决方案必须不修改数组 nums 且只用常量级 O(1) 的额外空间。
 * 
 * 输入：nums = [1,3,4,2,2]
 * 输出：2
 * 
 * 输入：nums = [3,1,3,4,2]
 * 输出：3
 * 
 * 输入：nums = [1,1]
 * 输出：1
 * 
 * 输入：nums = [1,1,2]
 * 输出：1
 * 
 */
// 寻找环形链表入环点一样的思路，将数组看成是一个链表，里面的值作为它的下一个节点的下标
var findDuplicate = (nums) => {
  let slow = nums[0], fast = nums[0];
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      fast = nums[0];
      while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
      }
      return slow;
    }
  }
};