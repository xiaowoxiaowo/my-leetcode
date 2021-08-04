/**
 * leetcode 680. 验证回文字符串2
 * 
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * 
 * 输入: s = "aba"
 * 输出: true
 * 
 * 输入: s = "abca"
 * 输出: true
 * 解释: 你可以删除c字符。
 * 
 * 输入: s = "abc"
 * 输出: false
 * 
 */
var isPali = function(str, l, r) {
  while (l < r) {            
    if (str[l] != str[r]) return false;
    l++; 
    r--;
  }
  return true;
}

var validPalindrome = function(s) {
  const len = s.length;
  if (len <= 2) return true;
  let left = 0, right = len - 1;
  while(left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return isPali(s, left + 1, right) || isPali(s, left, right - 1);
    }
  }
  return true;
};
