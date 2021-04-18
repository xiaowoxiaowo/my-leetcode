/***
 * leetcode 91
 * 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。
 * 例如，"111" 可以将 "1" 中的每个 "1" 映射为 "A" ，从而得到 "AAA" ，
 * 或者可以将 "11" 和 "1"（分别为 "K" 和 "A" ）映射为 "KA" 。
 * 注意，"06" 不能映射为 "F" ，因为 "6" 和 "06" 不同。
 * 
 * 给你一个只含数字的 非空 字符串 num ，请计算并返回 解码 方法的 总数
 * 题目数据保证答案肯定是一个 32 位 的整数。
 * 
 * 例1：
 * 输入：s = "12"
 * 输出：2
 * 解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
 * 
 * 输入：s = "226"
 * 输出：3
 * 解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
 * 
 * 输入：s = "0"
 * 输出：0
 * 
 * 输入：s = "06"
 * 输出：0
 * 
 * 解题思路：
 */
var numDecodings = function(s) {
  const len = s.length;
  if (s[0] === '0') return 0;
  if (len === 1) return 1;
  if (s[len - 1] === '0' && s[len - 2] === '0') return 0;

  let memo = [], isZero = true;
  memo[len - 1] = 0;
  if (s[len - 1] !== '0') {
    memo[len - 1] = 1;
    isZero = false;
  }

  for (let i = len - 2; i >= 0; i --) {
    if (s[i] === '0' && isZero) return 0;
    if (s[i] === '0') {
      memo[i] = memo[i + 1];
      isZero = true;
      continue;
    }
    if (Number(s.slice(i, i + 2)) <= 26) {
      if (isZero) {
        if (i === 0 && memo[i + 1] === 0) return 1;
        isZero = false;
        if (i !== 0 && s[i - 1] !== '0') {
          memo[i - 1] = memo[i + 1];
          i--;
        }
        continue;
      }
      memo[i] = memo[i + 1] + 1;
    } else {
      if (isZero) return 0;
      memo[i] = memo[i + 1];
    }
  }
  return memo[0];
};

// console.log(numDecodings('10'));
// console.log(numDecodings('100'));
// console.log(numDecodings('226'));
// console.log(numDecodings('12'));
// console.log(numDecodings("2101"));
console.log(numDecodings('1123'));


var numDecodings = function(s) {
  if(s[0] == "0") return 0;
  let dp = [1, 1], len = s.length;
  for(let i=1; i < len; ++i) {
    if(s[i - 1] != "0") {
      let num = (s[i - 1] + s[i] | 0);
      if(num >= 1 && num <= 26) {
        dp[i + 1] = s[i] != "0"? dp[i - 1] + dp[i]: dp[i - 1];
      } else if(s[i] != "0") {
        dp[i + 1] = dp[i];
      } else {
        return 0;
      }
    } else if(s[i] != "0") {
      dp[i + 1] = dp[i];
    } else {
      return 0;
    }
  }
  return dp[len];
};