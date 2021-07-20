/**
 * leetcode 567. 字符串的排列
 * 
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。
 * 换句话说，第一个字符串的排列之一是第二个字符串的 子串 。
 * 
 * 输入: s1 = "ab" s2 = "eidbaooo"
 * 输出: True
 * 解释: s2 包含 s1 的排列之一 ("ba").
 * 
 * 输入: s1= "ab" s2 = "eidboaoo"
 * 输出: False
 */
// 滑动窗口，其实就是寻找异位词。具体解析就不细说了
var checkInclusion = function(s1, s2) {
  const map = new Map(), len1 = s1.length, len2 = s2.length;
  for (let i = 0; i < len1; i ++) {
    map.set(s1[i], (map.get(s1[i]) || 0) + 1);
  }
  const curMap = new Map();
  let left = 0, right = 0, valid = 0;
  while (right < len2) {
    if (map.has(s2[right])) {
      const num = ((curMap.get(s2[right])) || 0) + 1;
      curMap.set(s2[right], num);
      if (num === map.get(s2[right])) {
        valid++;
      }
      if (right - left + 1 === len1) {
        if (valid === map.size) return true;
        const num = curMap.get(s2[left]) - 1;
        curMap.set(s2[left], num);
        if (num + 1 === map.get(s2[left])) {
          valid--;
        }
        left++;
      }
      right++;
    } else {
      right++;
      left = right;
      valid = 0;
      curMap.clear();
    }
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("hello", "ooolleoooleh"));