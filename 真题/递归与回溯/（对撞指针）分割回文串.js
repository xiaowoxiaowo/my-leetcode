/***
 * leetcode 131
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 回文串 是正着读和反着读都一样的字符串。
 * 
 * 
 * 例1：
 * 输入：s = "aab"
 * 输出：[["a","a","b"],["aa","b"]]
 * 
 * 例2：
 * 输入：s = "a"
 * 输出：[["a"]]
 * 
 * 
 * 提示:
 * s 仅由小写英文字母组成
 * 
 * 解题思路：
 * 
 */
// 初始思路，递归遍历，每次都需要判断数组是否为一个回文串数组
// 优化点：在判断是否回文串的方法里加入一个已访问对象，如果传入的数组已经被判断过，直接返回缓存结果
var partition = function(s) {
  if (!s) return [];
  if (s.length === 1) return [[s]];
  let res = [];
  let visited = {};
  // 判断是否回文串
  var isPalindrome = function(s) {
    // 缓存，之前判断过的字符直接返回缓存
    if (visited[s] !== undefined) return visited[s];
    const len = s.length;
    if (len <= 1) return true;
    let l = 0, r = len - 1;
    while(l < r) {
      if (s[l] !== s[r]) {
        visited[s] = false;
        return false;
      }
      l++;
      r--;
    }
    visited[s] = true;
    return true;
  };
  // 正常的递归思路
  const loop = (index, str) => {
    if (index === s.length) return res.push(str);
    for (let i = index; i < s.length ; i ++) {
      let curArr = s.substring(index, i + 1);
      if (isPalindrome(curArr)) {
        loop(i + 1, [...str, curArr]);
      }
    }
  };
  loop(0, []);
  return res;
};

console.log(partition("aab"));
