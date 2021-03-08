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

var findAnagrams = function(s, p) {
	const sLen = s.length, pLen = p.lengh, pMap = new Map();
	if (sLen < 1) return -1;
	for (let i = 0; i < p.length; i++) {
		pMap.set(p[i], pMap.has(p[i]) ? pMap.get(p[i]) + 1 : 1);
	}
	let l = 0, r = 0, res = [], sMap = new Map(), valid = 0;
	while (r < sLen) {
		if (pMap.has(s[r])) {
			sMap.set(s[r], sMap.has(s[r]) ? sMap.get(s[r]) + 1 : 1);
			if (sMap.get(s[r]) === pMap.get(s[r])) {
				valid++;
			}
		}
		r++;
		if (r - l >= pLen) {
			if (valid === pMap.size) {
				res.push(l);
			}
			sMap.set(s[l], sMap.get(s[l]) -1);
			if (sMap.get(s[l]) + 1 === pMap.get(s[l])) {
				valid--;
			} else if (sMap.get(s[l]) === pMap.get(s[l])) {
				valid++;
			}
			i++;
		}
	}
	return res;
};

console.log(findAnagrams("cbaebabacd", "abc"));
console.log('正确输出：[0, 6]');
console.log(findAnagrams("abab", "ab"));
console.log('正确输出：[0, 1, 2]');












// var findAnagrams = function(s, p) {
// 	const res = []
// 	const need = new Map()
// 	for(let i = 0; i < p.length; i++) {
// 			need.set(p[i], need.has(p[i])?need.get(p[i])+1: 1)
// 	}
// 	let left = 0, right = 0, valid = 0
// 	// 用于统计窗口中的字符
// 	const window = new Map()
// 	// 遍历s串
// 	while(right < s.length) {
// 			// 进入窗口的字符
// 			const c = s[right]
// 			// 扩大窗口
// 			right++
// 			// 进入窗口的字符是所需字符
// 			if (need.has(c)) {
// 					// 更新滑动窗口中的字符记录
// 					window.set(c, window.has(c)?window.get(c)+1:1)
// 					// 当窗口中的字符数和滑动窗口中的字符数一致
// 					if (window.get(c) === need.get(c)) {
// 							// 有效字符自增
// 							valid++
// 					}
// 			}
// 			// 当滑动窗口的大小超出p串长度时 收缩窗口
// 			while (right - left >= p.length) {
// 					// 有效字符和所需字符数一致 找到一条符合条件的子串
// 					if (valid === need.size) {
// 							// 保存子串的起始索引位置
// 							res.push(left)
// 					}
// 					// 离开窗口的字符
// 					const d = s[left]
// 					// 收缩窗口
// 					left++
// 					// 如果离开窗口字符是所需字符
// 					if (need.has(d)) {
// 							// 如果离开字符数和所需字符数一致
// 							if (window.get(d) === need.get(d)) {
// 									// 有效字符减少一个
// 									valid--
// 							}
// 							// 更新滑动窗口中的字符数
// 							window.set(d, window.get(d)-1)
// 					}
// 			}
// 	}
// 	// 返回结果
// 	return res
// };

var findAnagrams = function (s, p) {
	const res = [], win = {}, need = {}, pLen = p.length;
	let len = 0, val = 0;
	for (const x of p) {
			if (need[x] === undefined) {
					need[x] = win[x] = 0;
					len++;
			}
			need[x]++;
	}
	for (let i = 0; i < s.length; i++) {
			const j = i - pLen;
			if (s[i] in need && ++win[s[i]] === need[s[i]]) val++;
			if (s[j] in need && win[s[j]]-- === need[s[j]]) val--;
			if (val === len) res.push(j + 1);
	}
	return res;
};
