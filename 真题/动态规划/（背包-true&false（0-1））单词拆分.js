/***
 * leetcode 139
 * 给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 * 
 * 拆分时可以重复使用字典中的单词。
 * 你可以假设字典中没有重复的单词。
 * 
 * 输入：s = "leetcode", wordDict = ["leet", "code"]
 * 输出：true
 * 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
 * 
 * 输入：s = "applepenapple", wordDict = ["apple", "pen"]
 * 输出：true
 * 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。注意你可以重复使用字典中的单词。
 * 
 * 输入：s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出：false
 * 
 * 
 * 解题思路：
 * 
 * dp[i] = dp[i - x] || (str[i - x, i] in wordDict)
 */
const wordBreak = (s, wordDict) => {
  const wordList = new Set(wordDict);
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  // 初始化0为true，便于后续数据处理
  dp[0] = true;
  for (let i = 1; i <= len; i ++) {
    for (let j = i - 1; j >= 0; j --) {
      // 从右边开始截取[1位，2位, 3位，。。。全部]的字符串
      const nextStr = s.slice(j, i);
      if (wordList.has(nextStr) && dp[j]) {
        // 当截取的字符串和剩余字符串都存在于字典中，设当前字符串为true
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len];
};
