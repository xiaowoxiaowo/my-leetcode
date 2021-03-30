/***
 * leetcode 126
 * 给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列。转换需遵循如下规则：
 * 
 * 1.每次转换只能改变一个字母。
 * 2.转换后得到的单词必须是字典中的单词。
 * 
 * 说明：
 * 如果不存在这样的转换序列，返回一个空列表。
 * 所有单词具有相同的长度。
 * 所有单词只由小写字母组成。
 * 字典中不存在重复的单词。
 * 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 * 
 * 
 * 
 * 例1：
 * 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
 * 输出:
 * [
 * ["hit","hot","dot","dog","cog"],
 * ["hit","hot","lot","log","cog"]
 * ]
 * 
 * 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
 * 输出：[]
 * 解释：endWord "cog" 不在字典中，所以不存在符合要求的转换序列。
 * 
 * 
 * 解题思路：
 * 本题例子会超时，只按思路来吧，本题有点难，暂不做深入了。单词接龙 的思路，把路径作为数组传入队列中，
 * 然后通过队列运用BFS思路。
 */
var findLadders = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return [];
  let wordsSet = new Set(wordList);
  wordsSet.delete(beginWord);
  let queue = [], res = [], curLevel = 0;
  queue.push({ arr: [beginWord], level: 1, visited: [], pos: -1 });
  while (queue.length) {
    let { arr, level, visited, pos } = queue.shift();
    let curStr = arr[arr.length - 1];
    // 当level大于之前得到结果的level，返回结果
    if (curLevel !== 0 && curLevel < level) return res;
    if (curStr === endWord) {
      curLevel = level;
      res.push(arr);
    }
    for (let i = 0; i < curStr.length; i ++) {
      // 优化点，避免重复修改同一位置的单词
      if (i !== pos) {
        for (let j = 97; j < 123; j ++) {
          let newStr = curStr.slice(0, i) + String.fromCharCode(j) + curStr.slice(i + 1);
          if (wordsSet.has(newStr) && !visited.includes(newStr)) {
            queue.push({ arr: [...arr, newStr], level: level + 1, visited: [...visited, newStr], pos: i });
          }
        }
      }
    }
  }
  return res;
};