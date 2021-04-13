/***
 * leetcode 剑指 Offer 38. 字符串的排列
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 * 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
 * 
 * 
 * 例1：
 * 输入：s = "abc"
 * 输出：["abc","acb","bac","bca","cab","cba"]
 * 
 * 
 * 解题思路：
 * 全排列的思路
 */
// var permutation = function(s) {
//   const len = s.length;
//   if (len <= 1) return [s];
//   s = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
//   let res = [];
//   const dfs = (level, str, arr) => {
//     if (level === s.length) return res.push(arr.join(''));
//     for (let i = 0; i < str.length; i ++) {
//       if (i > 0 && str[i] === str[i - 1]) continue;
//       const newArr = [...str];
//       const curVal = newArr[i];
//       newArr.splice(i, 1);
//       dfs(level + 1, newArr, [...arr, curVal]);
//     }
//   };
//   dfs(0, s, []);
//   return res;
// };

var permutation = function(s) {
  const len = s.length;
  if (len <= 1) return [s];
  // Set类型用来去重
  const res = new Set;
  // 记录使用过的位置
  const used = {};
  const dfs = (arr) => {
    // 满足条件，把结果推入res中
    if (arr.length == s.length) return res.add(arr);
    for (let i = 0; i < s.length; i ++) {
      // 每次循环，记录使用过的位置
      if (used[i]) continue;
      // 递归回溯
      used[i] = true;
      dfs(arr + s[i]);   
      used[i] = false;
    }
  }

  dfs('');
  return [...res];
};
