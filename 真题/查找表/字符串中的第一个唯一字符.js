/**
 * leetcode 387. 字符串中的第一个唯一字符
 * 
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * s = "leetcode"
 * 返回 0
 * 
 * s = "loveleetcode"
 * 返回 2
 * 
 */
var firstUniqChar = function(s) {
  const len = s.length;
  if (len === 0) return -1;
  if (len === 1) return 0;
  const cache = {};
  for (let i = 0; i < len; i ++) {
    if (cache[s[i]]) {
      cache[s[i]].count = cache[s[i]].count + 1;
    } else {
      cache[s[i]] = { index: i, count: 1 };
    }
  }
  console.log(cache);
  let min = len;
  for (let j in cache) {
    if (cache[j].index < min && cache[j].count === 1) min = cache[j].index;
  }
  return min === len ? -1 : min;
};

console.log(firstUniqChar('leetcode'));