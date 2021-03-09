/***
 * leetcode 3
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 例1：
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 
 * 例2:
 * 输入：s = "bbbbb"
 * 输出：3
 * 
 * 例3:
 * 输入：s = ""
 * 输出：0
 * 
 */
var lengthOfLongestSubstring = function(s) {
	const len = s.length;
	if (!s) return 0;
	let l = 0, r = -1, res = 0, freq = {};
	while(r + 1 < len & len - l > res) {
		if (!freq[s[r + 1]]) {
			freq[s[r + 1]] = 1;
			r++;
		} else {
			freq[s[l]] = 0;
			l++;
		}
		res = Math.max(res, r - l + 1);
	}
	return res;
};

console.log(lengthOfLongestSubstring("pwwkew"))