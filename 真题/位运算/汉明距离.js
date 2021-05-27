/***
 * leetcode 461
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
 * 给出两个整数 x 和 y，计算它们之间的汉明距离。
 * 
 * 输入: x = 1, y = 4
 * 输出: 2
 * 解释:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑ 
 * 
 * 输入: x = 3, y = 7
 * 输出: 1
 * 解释:
 * 3   (0 0 1 1)
 * 7   (0 1 1 1)
 *        ↑
 * 
 * 说明： 0 ≤ x, y < 2^31.
 */
// 异或思路，先对x和y进行异或计算，每个位置上如果为1，即两个值的当前位置是不同的
 var hammingDistance = function(x, y) {
  let s = x ^ y, res = 0;
  while (s) {
    res += s & 1;
    s >>= 1;
  }
  return res;
};

console.log(hammingDistance(1, 4));
console.log(hammingDistance(3, 7));

