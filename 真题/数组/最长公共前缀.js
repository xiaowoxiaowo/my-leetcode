/**
 * leetcode 14 最长公共前缀
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * 
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 * 
 * 输入：strs = ["dog","racecar","car"]
 * 输出：""
 * 解释：输入不存在公共前缀。
 */
var longestCommonPrefix = function(strs) {
  let res = strs[0];
  for (let i = 1; i < strs.length; i ++) {
    const len1 = res.length;
    const len2 = strs[i].length;
    let newList = '';
    for (let j = 0; j < len1 && j < len2; j ++) {
      if (res[j] !== strs[i][j]) break;
      newList += res[j];
    }
    if (!newList) return '';
    res = newList;
  }
  return res;
};
