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
 * 该题属于经典的01背包问题的变种，将01背包问题中的体积这唯一的限制条件，变成了0和1的个数这样两个限制条件。
 * 物品：数组元素，
 * 体积：二维体积，消耗的0的个数，1的个数
 * 求满足该体积的最大物品数量？
 * 
 * 我们先考察题目确定循环以及核心的状态转移方程。
 * 因为是01背包问题，大致的循环如下
 * for (x...strs) {
 *  for (let y = m; y >= strs[x]; y --)
 * }
 * 但是本题的限制条件有两个，限制0和1的个数，所以该题的限制条件应该是一个m和n构成的二维数组，所以循环应该如下
 * for (x...strs) {
 *  for (let y = m; y >= strs[x]; y --) {
 *    for (let z = m; z >= strs[x]; z --) {
 *    }
 *  }
 * }
 * 
 * 
 * 因为是求最大最小值，核心状态转移方程大致如下
 * dp[i] = Math.max(dp[i], dp[i - strs]);
 * 条件是一个二维数组，所以，状态转移方程也需要改为二维数组
 * dp[y][z] = Math.max(dp[y][z], dp[y - strs][z - strs]);
 */

var findMaxForm = function(strs, m, n) {
  const len = strs.length;
  if (!m && !n) return 0;
  let map = [];
  // 将strs数组中的字符串预先转为0和1个数，便于后续直接获取
  for (let i = 0; i < len; i ++) {
    let zeroNum = 0, oneNum = 0;
    for (let j = 0; j < strs[i].length; j ++) {
      if (strs[i][j] === '0') {
        zeroNum ++;
      } else {
        oneNum ++;
      }
    }
    map[i] = [zeroNum, oneNum];
  }
  // dp代表当strs从[0...len]时，m和n从[0...m],[0...n]时的最大子集
  // 初始化时，strs取0个元素，所以不管m和n为多少，最大子集都为0
  const dp = new Array(m + 1).fill(0).map(v => new Array(n + 1).fill(0));

  // 核心的循环以及状态转移方程
  for (let x = 1; x <= len; x ++) {
    const [zero, one] = map[x - 1];
    for (let y = m; y >= zero; y --) {
      for (let z = n; z >= one; z --) {
        dp[y][z] = Math.max(dp[y][z], dp[y - zero][z - one] + 1);
      }
    }
  }
  return dp[m][n];
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
console.log(findMaxForm(["10", "0", "1"], 1, 1));
