/***
 * leetcode 1143
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
 * 
 * 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 * 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
 * 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
 * 
 * 例1：
 * 输入：text1 = "abcde", text2 = "ace"        
 * 输出：3
 * 解释：最长公共子序列是 "ace" ，它的长度为 3 。
 * 
 * 输入：text1 = "abc", text2 = "abc"
 * 输出：3
 * 解释: 最长公共子序列是 "abc" ，它的长度为 3 。
 * 
 * 输入：text1 = "abc", text2 = "def"
 * 输出：0
 * 解释: 两个字符串没有公共子序列，返回 0 。
 * 
 * 说明：
 * text1 和 text2 仅由小写英文字符组成。
 * 
 * 
 * 解题思路：
 * 难点在于总结出状态转移方程，多个序列之间的比较，需要创建的dp就应该是个多维数组。
 * 动态规划的思路其实也是遍历所有的情况，但是是从底向上，很多题的解题思路其实可以从这个本质上去思考。
 * 
 * LCS(m, n) 代表S1[0...m]和S2[0...n]的最长公共子序列的长度
 * 
 * S1[m] === S2[n]
 * LCS(m, n) = 1 + LCS(m - 1, n - 1);
 * 
 * S1[m] !== S2[n]
 * LCS(m, n) = max(LCS(m - 1, n), LCS(m, n - 1));
 */
var longestCommonSubsequence = function(text1, text2) {
  const m = text1.length;
  const n = text2.length;
  // 边界处理
  if (m === 0 || n === 0) return 0;
  // 创建一个二维数组dp，这里使用m + 1和n + 1是为了处理下面的i - 1和j - 1的情况
  // 如果i和j为0的时候，i - 1和j - 1所代表的项不存在，值就为0。
  const dp = new Array(m + 1).fill(0).map(v => new Array(n + 1).fill(0));
  // 遍历
  for (let i = 1; i <= m; i ++) {
    for (let j = 1; j <= n; j ++) {
      if (text1[i - 1] === text2[j - 1]) {
        // 如果值相等
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        // 如果值不相等
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
};

console.log(longestCommonSubsequence("abcde", "ace"));