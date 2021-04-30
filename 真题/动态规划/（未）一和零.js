/***
 * leetcode 474
 * 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。
 * 请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。
 * 如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。
 * 
 * 输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
 * 输出：4
 * 解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
 * 其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。
 * 
 * 输入：strs = ["10", "0", "1"], m = 1, n = 1
 * 输出：2
 * 解释：最大的子集是 {"0", "1"} ，所以答案是 2 。
 * 
 * 提示：strs[i] 仅由 '0' 和 '1' 组成
 * 
 * 解题思路：
 * 
 * dp[i] = Math.max(dp[i], dp[i - strs])
 * 
 * for(let i of strs) {
 *  
 * }
 */
const getZeroAndOne = (str) => {
  let zeroNum = 0, oneNum = 0;
  for (let i = 0; i < str.length; i ++) {
    if (str[i] === '0') {
      zeroNum ++;
    } else {
      oneNum ++;
    }
  }
  return [zeroNum, oneNum];
};

var findMaxForm = function(strs, m, n) {
  const len = strs.length;
  if (!m && !n) return 0;
  const dp = new Array(len + 1).fill(0);
  for (let i = 1; i <= n; i ++) {
    let sum = 0;
    for (let n = 0; n < len; n ++) {
      const r = getZeroAndOne(strs[n]);
      if (r[1] <= i && r[0] === 0) sum ++;
    }
    dp[0][i] = sum;
  }
  for (let i = 0) d
};