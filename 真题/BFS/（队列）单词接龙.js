/***
 * leetcode 127
 * 字典 wordList 中从单词 beginWord 和 endWord 的 转换序列 是一个按下述规格形成的序列：
 * 
 * 序列中第一个单词是 beginWord 。
 * 序列中最后一个单词是 endWord 。
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典 wordList 中的单词。
 * 
 * 给你两个单词 beginWord 和 endWord 和一个字典 wordList ，
 * 找到从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0。
 * 
 * 
 * 例1：
 * 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
 * 输出:5
 * 解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
 * 
 * 输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
 * 输出：0
 * 解释：endWord "cog" 不在字典中，所以无法进行转换。
 * 
 * 提示：
 * 1 <= beginWord.length <= 10
 * endWord.length == beginWord.length
 * 1 <= wordList.length <= 5000
 * wordList[i].length == beginWord.length
 * beginWord、endWord 和 wordList[i] 由小写英文字母组成
 * beginWord != endWord
 * wordList 中的所有字符串 互不相同
 * 
 * 解题思路：
 * 使用队列实现BFS（广度优先遍历）。
 * 
 * 难点在于怎么去查找可以转换的单词，下面解答的思路是将一个单词分成相应长度的不同等分。
 * 比如hit，长度为3，我先获取_it, h_t, hi_,这样三个字符串，然后给相应的空中遍历a-z所有的字母，然后再去跟wordList中的字符去匹配。
 * 匹配成功，推入队列，长度 + 1，然后将wordList中当前匹配的字符串删除（避免下次匹配时影响），直到匹配值等于endWord，结束遍历
 * 
 */

const ladderLength = (beginWord, endWord, wordList) => {
  // endWord如果不存在于wordList
  if (!wordList.includes(endWord)) return 0;
  // 将wordList转为Set类型，便于后续操作（其实也有去重作用，但是本题中wordList数据都不相同）
  let wordsSet = new Set(wordList);
  let queue = [];
  queue.push({ str: beginWord, level: 1 });
  while (queue.length) {
    let { str, level } = queue.shift();
    // 如果符合条件，直接返回
    if (str === endWord) return level;
    // 遍历当前的字符串
    for (let i = 0;i < str.length;i ++) {
      // 遍历a-z（97-122），大写字母是（65-90）
      for (let j = 97;j < 123;j ++) {
        // 拼接新的字符串
        let newWord = str.slice(0, i) + String.fromCharCode(j) + str.slice(i + 1);
        // 跟wordList中的字符串匹配
        if (wordsSet.has(newWord)) {
          queue.push({ str: newWord, level: level + 1 });
          // 匹配完，将相应项删除，防止影响下次匹配
          wordsSet.delete(newWord);
        }
      }
    }
  }
  return 0;
}
