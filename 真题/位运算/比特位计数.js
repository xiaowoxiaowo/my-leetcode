/**
 * leetcode 338. 比特位计数
 * 
 * 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
 * 
 * 输入: 2
 * 输出: [0,1,1]
 * 
 * 输入: 5
 * 输出: [0,1,1,2,1,2]
 * 
 * 要求算法的空间复杂度为O(n)。
 * 要求在C++或任何其他语言中不使用任何内置函数
 */

// 对于一个数i，如果这个数 >> 1,向右移动一位，其实就是对这个数Math.floor(i / 2)
// 这里可以使用动态规划的思路

// 如果i是奇数，bits[i] = bits[Math.floor(i / 2)] + 1;
// 如果i是偶数，bits[i] = bits[i / 2];
var countBits = function(n) {
  const bits = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
      bits[i] = bits[i >> 1] + (i & 1);
  }
  return bits;
};
