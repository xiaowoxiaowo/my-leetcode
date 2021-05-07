/**
 * leetcode 55
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标。
 * 
 * 
 * 输入：nums = [2,3,1,1,4]
 * 输出：true
 * 解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 * 
 * 输入：nums = [3,2,1,0,4]
 * 输出：false
 * 解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 * 
 * 
 * 解题思路：
 * 贪心思路，比较简单，定义一个当前最大的下标数，初始从下标为0的元素开始，一直递归到这个最大的下标数，如果当前元素
 * 所代表的最大下标数大于当前的最大下标数，将最大下标数设为当前值。
 * 如果最大下标数大于数组长度，即能够达到。如果遍历完成，还是没有满足前面条件，即不能达到。
 */
var canJump = function(nums) {
  const len = nums.length;
  // 边界条件处理
  if (len <= 1) return true;
  let i = 0;
  let maxIndex = 0;
  // 从0开始遍历到最大下标数maxIndex
  while(i <= maxIndex) {
    // 获取当前节点所能达到的下标，注意需要i + nums[i]
    let curIndex = i + nums[i];
    // 判断当前节点所能达到的下标是否大于最大下标数
    if (curIndex > maxIndex) {
      // 当前节点所能达到的下标大于数组长度，返回true
      if (curIndex >= len - 1) return true;
      // 重新赋值给最大下标
      maxIndex = curIndex;
    }
    i++;
  }
  return false;
};

console.log(canJump([3,2,1,0,4]));
console.log(canJump([2,3,1,1,4]));
