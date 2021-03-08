/***
 * leetcode 438
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
 * 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 * 
 * 说明：
 * 字母异位词指字母相同，但排列不同的字符串。
 * 不考虑答案输出的顺序。
 * 
 * 例1：
 * 输入: s: "cbaebabacd" p: "abc"
 * 输出: [0, 6]
 * 
 * 例2:
 * 输入：s: "abab" p: "ab"
 * 输出：[0, 1, 2]
 * 
 * 
 */
function isAnagrams(str1, str2) {
	return true;
}

var findAnagrams = function(s, p) {
	const sLen = s.length, plen = p.lengh;
	if (sLen < 1) return -1;
	let l = 0, r = plen - 1, res = [];
	while (r < sLen) {
		if (isAnagrams(s[l], s[r])) {
			res.push(l);
		}
		r++;
		l++;
	}
	return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log('正确输出：[0, 6]');
console.log(findAnagrams("abab", "ab"));
console.log('正确输出：[0, 1, 2]');