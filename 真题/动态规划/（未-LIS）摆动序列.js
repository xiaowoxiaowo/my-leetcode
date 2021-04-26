/***
 * leetcode 376
 * 如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为摆动序列。
 * 第一个差（如果存在的话）可能是正数或负数。少于两个元素的序列也是摆动序列。
 * 
 * 例如， [1,7,4,9,2,5] 是一个摆动序列，因为差值 (6,-3,5,-7,3) 是正负交替出现的。
 * 相反, [1,4,7,2,5] 和 [1,7,4,5,5] 不是摆动序列，第一个序列是因为它的前两个差值都是正数，
 * 第二个序列是因为它的最后一个差值为零。
 * 
 * 给定一个整数序列，返回作为摆动序列的最长子序列的长度。 通过从原始序列中删除一些（也可以不删除）元素来获得子序列，
 * 剩下的元素保持其原始顺序。
 * 
 * 例1：
 * 输入：[1,7,4,9,2,5]
 * 输出：6
 * 解释：整个序列均为摆动序列。
 * 
 * 输入：[1,17,5,10,13,15,10,5,16,8]
 * 输出：7
 * 解释: 这个序列包含几个长度为 7 摆动序列，其中一个可为[1,17,10,13,10,16,8]。
 * 
 * 输入：[1,2,3,4,5,6,7,8,9]
 * 输出：2
 * 
 * 进阶:
 * 你能否用 O(n) 时间复杂度完成此题?
 * 
 * 初始动态规划解题思路：
 * 
 * dp[i]代表nums[0...i]这个以i为尾节点的区间内的最大摆动序列长度
 * s[i]代表nums[0...i]这个以i为尾节点的区间，上一个摆动差是正还是负(唯一)
 * 
 * 每个i的值都需要遍历[j...1]
 * (nums[i] - nums[j]) * s[j] < 0
 * dp[i] = max(dp[i], 1 + dp[j])
 * s[i] = nums[i] - nums[j];
 * 
 */
// var wiggleMaxLength = function(nums) {
//   const len = nums.length;
//   if (len < 2) return len;
//   if (len === 2 && nums[0] === nums[1]) return 1;
//   const dp = new Array(len).fill(1);
//   const s = new Array(len).fill(0);
//   let res = 1;
//   dp[1] = 2;
//   s[1] = Math.sign(nums[1] - nums[0]);
//   for (let i = 2; i < len; i ++) {
//     for (let j = i - 1; j >= 1; j --) {
//       const curStatus = Math.sign(nums[i] - nums[j]);
//       const curVal = 1 + dp[j];
//       if (s[j] === 0 && curStatus !== 0 && curVal > dp[i]) {
//         dp[i] = curVal - (j === 1) ? 1 : 0;
//         s[i] = curStatus;
        
//       }
//       if (curStatus * s[j] < 0 && curVal > dp[i]) {
//         dp[i] = curVal;
//         s[i] = curStatus;
//       }
//     }
//     res = Math.max(res, dp[i]);
//   }
//   return res;
// };

// 贪心
var wiggleMaxLength = function(nums) {
  const n = nums.length;
  if (n < 2) {
    return n;
  }
  let prevdiff = nums[1] - nums[0];
  let ret = prevdiff !== 0 ? 2 : 1;
  for (let i = 2; i < n; i++) {
    const diff = nums[i] - nums[i - 1];
    if ((diff > 0 && prevdiff <= 0) || (diff < 0 && prevdiff >= 0)) {
      ret++;
      prevdiff = diff;
    }
  }
  return ret;
};