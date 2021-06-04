/***
 * leetcode 647 回文子串
 * 
 * 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
 * 
 * 输入："abc"
 * 输出：3
 * 解释：三个回文子串: "a", "b", "c"
 * 
 * 输入："aaa"
 * 输出：6
 * 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
 */
// 动态规划判断回文串思路，定义一个dp[i][j]代表s[i...j]这个字符串是否是回文串
// 比如想判断一个s[m...n]的子串是否是回文子串，只需要满足两个条件，s[m] === s[n] 和 dp[m + 1][n - 1] 为true
var countSubstrings = function(s) {
  let res = 0;
  const len = s.length;
  if (len <= 1) return len;
  // 定义一个二维数组
  const dp = new Array(len).fill(false).map(v => new Array(len).fill(false));
  // d为每次遍历的字符串左右节点的距离
  for (let d = 0; d < len; d ++) {
    // i为字符串的初始节点
    // 这里的遍历是把以[0...len-1]节点作为左侧开始节点，每次都判断[i...i + d]这个范围内的字符串是否满足回文串
    for (let i = 0; i < len - d; i ++) {
      if (d === 0) {
        // 如果距离为0，即字符串长度为1，都满足回文串
        dp[i][i + d] = true;
        res++;
      } else if (i + d < len) {
        // 如果距离大于0，而且i + d不超出s的长度
        if (s[i + d] === s[i] && (d === 1 || dp[i + 1][i + d - 1])) {
          // 满足条件，设置dp为true
          dp[i][i + d] = true;
          res++;
        }
      }
    }
  }
  return res;
};

// 这里可以进行一些优化，dp只需要定义为一个一维数组即可，可以改变遍历的顺序
// 第一层i遍历[0...len - 1]，第二层遍历[0...i]
// 这样，每次遍历的范围都是下一次遍历需要使用的dp数据

console.log(countSubstrings('abc'));