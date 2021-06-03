/***
 * 525. 连续数组
 * 
 * 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
 * 
 * 输入: nums = [0,1]
 * 输出: 2
 * 说明: [0, 1] 是具有相同数量0和1的最长连续子数组。
 *  
 * 输入: nums = [0,1,0]
 * 输出: 2
 * 
 * 说明: 
 * 1 <= nums.length <= 105
 * nums[i] 不是 0 就是 1
 * 
 */
// 对于这类连续子数组的判断，基本都可以使用 前缀和 和 查找表 思路
// 将0看做是-1,1看做是1。0和1相同数量的子数组的子项之和为0
// 每次循环节点，都去查找表中寻找是否存在跟当前子项和相同的节点，如果存在，当前节点位置 - 相同和的节点位置 = 目前的最长子数组
var findMaxLength = function(nums) {
  const len = nums.length;
  if (nums < 2) return 0;
  let max = 0;
  // 只需要计算当前的子项和即可，不需要用数组
  let sum = Number(nums[0] ? 1 : -1);
  const map = new Map();
  map.set(sum, 0);
  for (let i = 1; i < len; i ++) {
    // 计算当前项的子项和
    sum = sum + Number(nums[i] ? 1 : -1);
    // 如果子项和为0，不需要在查找表中寻找了，直接取 当前数组长度 和 当前的最大值 中的较大值
    if (sum === 0) {
      max = Math.max(max, i + 1);
    } else {
      // 如果子项不为0，在查找表中寻找
      if (map.has(sum)) {
        // 如果能找到，计算数组长度
        // 注意：这里不要更新map中的节点，对于相同的子项和，我们只需要保存最左侧的节点，保持得到的值是最大值
        max = Math.max(max, i - map.get(sum));
      } else {
        // 如果找不到，给查找表赋值
        map.set(sum, i);
      }
    }
  }
  return max;
};

console.log(findMaxLength([0,1]));