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
 * 解答思路：
 * 本题重点其实就在怎么判断s中的子串是否是p字符串的异位词。通过map类型（主要是可以使用pMap.size得到该
 * map里key的数量，也可以用对象来实现，不过需要自己维护一个key的数量）key的数量来判断异位词，只要key的数量一致，
 * 每个key存在个数是一致的，就可以判断符合异位词。再通过滑动窗口，得到最终的结论。
 */

var findAnagrams = function(s, p) {
	const sLen = s.length, pLen = p.length, pMap = new Map();
	if (sLen < 1) return [];
	// 初始化梳理p字符串
	for (let i = 0; i < p.length; i++) {
		pMap.set(p[i], pMap.has(p[i]) ? pMap.get(p[i]) + 1 : 1);
	}
	let l = 0, r = 0, res = [], sMap = new Map(), valid = 0;
	while (r < sLen) {
		const cR = s[r];
		r++;
		// 只需要去判断符合p字符串特性的字符
		if (pMap.has(cR)) {
			// 增加字符串个数
			sMap.set(cR, sMap.has(cR) ? sMap.get(cR) + 1 : 1);
			// 如果某个字符串数量跟p里的字符个数相等
			if (sMap.get(cR) === pMap.get(cR)) {
				valid++;
			}
		}
		// 上面已经给r加1了，所以这里只需要判断r - l === pLen。在子串长度跟p相等时，去判断是否符合异位词。
		if (r - l >= pLen) {
			if (valid === pMap.size) {
				res.push(l);
			}
			const cL = s[l];
			// 滑动窗口要右移了，i加1之前，判断s[l]当前的字符是否符合验证条件，如果符合，给valid减1。
			if (pMap.has(cL)) {
				if (sMap.get(cL) === pMap.get(cL)) {
					valid--;
				}
				sMap.set(cL, sMap.get(cL) - 1);
			}
			l++;
		}
	}
	return res;
};


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
