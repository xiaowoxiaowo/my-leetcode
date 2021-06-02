/***
 * leetcode 523
 * 
 * 给你一个整数数组 nums 和一个整数 k ，编写一个函数来判断该数组是否含有同时满足下述条件的连续子数组：
 * 
 * - 子数组大小 至少为 2 ，且
 * - 子数组元素总和为 k 的倍数。
 * 
 * 如果存在，返回 true ；否则，返回 false 。
 * 如果存在一个整数 n ，令整数 x 符合 x = n * k ，则称 x 是 k 的一个倍数。
 * 
 * 
 * 输入：nums = [23,2,4,6,7], k = 6
 * 输出：true
 * 解释：[2,4] 是一个大小为 2 的子数组，并且和为 6 。
 * 
 * 输入：nums = [23,2,6,4,7], k = 6
 * 输出：true
 * 解释：[23, 2, 6, 4, 7] 是大小为 5 的子数组，并且和为 42 。 42 是 6 的倍数，因为 42 = 7 * 6 且 7 是一个整数。
 * 
 * 输入：nums = [23,2,6,4,7], k = 13
 * 输出：false
 * 
 */
// 查找表的思路，对这个数组求前缀之和，sum[]是前缀之和的数组，sum[i]代表[0...i]的节点之和
// 如果需要求[i + 1...j]这个区间内的连续子数组，只需要计算sum[j] - sum[i]
// 我们还可以用对象再存储一个余值,只要sum[j] % k === sum[i] % k，那他们相减得出来的值自然能够被k整除
// 用查找表的方式，每次计算前缀之和时，把这个和的余数作为key，下标i作为value，存储到对象中。
// 这里还需要注意一些边缘条件，
// 1. 比如k === 0的情况，不能作为除数，只需要判断存在两个连续的0即可
// 2. 如果两个不同下标的前缀之和的余数相同，不能重新赋值，应该保留之前那个下标较小的值

var checkSubarraySum = function(nums, k) {
  const len = nums.length;
  // 如果数组长度小于2，就不满足条件
  if (len < 2) return false;
  // 数组长度大于等于2的情况，如果k为正负1，所有情况都能满足
  if (Math.abs(k) === 1) return true;
  // 前缀和数组
  const sum = new Array(len).fill(nums[0]);
  // 查找表
  const map = {};
  // 需要判断k是否为0，不为0，初始化nums中的第一个节点，余数作k，下标作value
  if (k !== 0) map[nums[0] % k] = 0;
  for (let i = 1; i < len; i ++) {
    if (k !== 0) {
      // k不为0的情况，先计算前缀和
      sum[i] = sum[i - 1] + nums[i];
      const remain = sum[i] % k;
      // 如果[0...i]的和直接能被k整除，那就直接满足条件
      if (remain === 0) return true;
      // 查找之前是否存在相同余数的节点
      const index = map[remain];
      if (index !== undefined) {
        // 如果存在，判断两个节点的下标距离是否大于1，因为要求子数组长度最小为2
        if (i - index > 1) return true;
        // 查找表已经存在某个余数，不要更新数据，保存较小下标的那个节点
      } else {
        // 如果不存在，给查找表赋值
        map[remain] = i;
      }
    } else {
      // k为0的情况，只需要判断两个连续的子数组是否为0
      if (nums[i] === 0 && nums[i - 1] === 0) return true;
    }
  }
  return false;
};

console.log(checkSubarraySum([1,3,6,0,9,6,9], 7));