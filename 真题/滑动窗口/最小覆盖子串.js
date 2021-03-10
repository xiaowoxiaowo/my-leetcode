/***
 * leetcode 76
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 例1：
 * 输入: s = "ADOBECODEBANC", t = "ABC"
 * 输出: "BANC"
 * 
 * 例2:
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 
 * 思路：跟找出 所有异位词 思路基本一致，稍微改些参数将数组全部遍历一遍，找出最小的子串
 */

var minWindow = function(s, t) {
  const sLen = s.length, tLen = t.length;
  if (sLen === 0 || sLen < tLen) return '';
  let l = 0, r = 0, start = -1, minLen = sLen + 1, vaild = 0;
  let tMap = new Map(), sMap = new Map();
  for (let i = 0; i < tLen; i++) {
    const c = t[i];
    tMap.set(c, tMap.has(c) ? tMap.get(c) + 1 : 1);
  }
  while(r < sLen) {
    const cR = s[r];
    r++;
    if (tMap.has(cR)) {
      sMap.set(cR, sMap.has(cR) ? sMap.get(cR) + 1 : 1);
      if (sMap.get(cR) === tMap.get(cR)) {
        vaild++;
      }
    }
    while (vaild === tMap.size) {
      const cL = s[l];
      if (tMap.has(cL)) {
        if (sMap.get(cL) === tMap.get(cL)) {
         vaild--;
         if(r - l < minLen) {
          start = l;
          minLen = r - l;
         }
        }
        sMap.set(cL, sMap.get(cL) - 1);
      }
      l++;
    }
  }
  if (start === -1) return '';
  return s.substring(start, start + minLen);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log("正确输出：BANC");

console.log(minWindow("a", "a"));
console.log("正确输出：a");
