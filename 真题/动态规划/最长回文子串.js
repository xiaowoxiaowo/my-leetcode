/***
 * leetcode 5
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * 
 * 
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 * 输入：s = "a"
 * 输出："a"
 * 
 * 输入：s = "ac"
 * 输出："a"
 * 
 * 提示：
 * s 仅由数字和英文字母（大写和/或小写）组成
 * 
 * 解题思路：
 * 
 * 要清楚，这类非背包问题的动态规划的思路其实是递归的反向实现，是一个从底向上的遍历过程，依然是会把所有情况全部遍历一遍的。
 * dp的定义是最为关键的一点。
 * 这里定义，dp[j][i]代表从j->i的字符串是否是回文串
 * 
 * 
 */
var longestPalindrome = function(s) {
  const len = s.length;
  // 边界情况处理
  if (len <= 1) return s;
  if (len === 2) return s[0] === s[1] ? s : s[0];
  let res = '';
  // 创建二维数组dp
  const dp = new Array(len).fill(0).map(v => new Array(len).fill(false));
  // i遍历[0...len-1]
  for (let i = 0; i < len; i ++) {
    // j遍历[i...0]
    for (let j = i; j >= 0; j --) {
      // 只有当最左和最右的两个字符是相等，该字符才可能是回文串
      if (s[i] === s[j]) {
        // 状态转移方程
        // 如果最左和最右的两个字符相等，而且j->i这个字符串长度小于等于3，该字符串即为回文串
        // 如果最左和最右的两个字符相等，j->i这个字符串长度大于3，就直接判断子字符串是否为回文串，即dp[j + 1][i - 1]
        dp[j][i] = (i - j <= 2) || dp[j + 1][i - 1];
        if (dp[j][i]) {
          // 保存长度最大的回文子串
          const str = s.substring(j, i + 1);
          res = str.length > res.length ? str : res;
        }
      }
    }
  }
  return res;
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));

