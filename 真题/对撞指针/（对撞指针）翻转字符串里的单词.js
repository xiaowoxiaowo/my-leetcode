/***
 * leetcode 151
 * 给定一个字符串，逐个翻转字符串中的每个单词。
 * 
 * 无空格字符（数字也算）构成一个 单词 。
 * 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
 * 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
 * 
 * 例1：
 * 输入："the sky is blue"
 * 输出："blue is sky the"
 * 
 * 例2:
 * 输入："  hello world!  "
 * 输出："world! hello"
 * 
 * 例3:
 * 输入："a good   example"
 * 输出："example good a"
 * 
 */
var reverseWords = function(s) {
  if (s.length < 2) return s;
  s = s.split(' ');
  let i = 0, len = s.length
  while(i < len) {
    if (s[i] === '') {
      s.splice(i, 1);
      len--;
      continue;
    }
    i++;
  }
  let l = 0, r = len - 1;
  while(l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
  s = s.join(' ');
  return s;
};
