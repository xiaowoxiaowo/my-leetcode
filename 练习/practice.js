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
var findMaxLength = function(nums) {
  const len = nums.length;
  if (nums < 2) return 0;
  const sum = new Array(len).fill(0);
  const map = {};
  let max = 0;
  for (let i = 0; i < len; i ++) {
    if (i === 0) {
      sum[i] = nums[i] ? 1 : -1;
      map[sum[i]] = i;
    } else {
      sum[i] = Number(sum[i - 1]) + Number(nums[i] ? 1 : -1);
      if (sum[i] === 0) {
        max = Math.max(max, i + 1);
      } else {
        if (map[sum[i]] !== undefined) {
          max = Math.max(max, i - map[sum[i]]);
        } else {
          map[sum[i]] = i;
        }
      }
    }
  }
  return max;
};

console.log(findMaxLength([0,0,1,0,0,0,1,1]));