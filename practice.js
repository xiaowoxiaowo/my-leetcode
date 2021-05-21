/***
 * leetcode 692 前K个高频单词
 * 给一非空的单词列表，返回前 k 个出现次数最多的单词。
 * 返回的答案应该按单词出现频率由高到低排序。
 * 如果不同的单词有相同出现频率，按字母顺序排序。
 * 
 * 输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
 * 输出: ["i", "love"]
 * 解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。注意，按字母顺序 "i" 在 "love" 之前。
 * 
 * 输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
 * 输出: ["the", "is", "sunny", "day"]
 * 解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，出现次数依次为 4, 3, 2 和 1 次。
 * 
 * 说明：
 * 假定 k 总为有效值， 1 ≤ k ≤ 集合元素数。
 * 输入的单词均由小写字母组成。
 * 尝试以 O(n log k) 时间复杂度和 O(n) 空间复杂度解决。
 */

var topKFrequent = function(words, k) {
  const len = words.length;
  if (len === 0) return [];
  if (len === 1) return [words[0]];
  const m = {};
  for (let i = 0; i < len; i ++) {
    const v = m[words[i]];
    m[words[i]] = v ? v + 1 : 1;
  }
  return Object.entries(m).sort((a, b) => (
    (a[1] !== b[1]) ? b[1] - a[1] : a[0].localeCompare(b[0])
  )).slice(0, k).map(v => v[0]);;
};

// console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
// console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));