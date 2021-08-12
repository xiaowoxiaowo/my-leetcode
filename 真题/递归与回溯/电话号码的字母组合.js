/***
 * leetcode 17
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 2(abc)
 * 3(def)
 * 4(ghi)
 * 5(jkl)
 * 6(mno)
 * 7(pqrs)
 * 8(tuv)
 * 9(wxyz)
 * 
 * 
 * 例1：
 * 输入: digits = "23"
 * 输出: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 * 
 * 例2：
 * 输入: digits = ""
 * 输出: []
 * 
 * 例3：
 * 输入: digits = "2"
 * 输出: ["a","b","c"]
 * 
 * 提示：
 * 0 <= digits.length <= 4
 * digits[i] 是范围 ['2', '9'] 的一个数字。
 * 
 * 解题思路：
 * 递归，对于每个数字对应的字符串中每个字母，都进行递归
 * 时间复杂度是 3^n，常数的n次方的时间复杂度，都可以表示成O(2^n)
 */

const LETTER_MAP = {
	'2': 'abc',
	'3': 'def',
	'4': 'ghi',
	'5': 'jkl',
	'6': 'mno',
	'7': 'pqrs',
	'8': 'tuv',
	'9': 'wxyz',
	res: []
};


var findCombination = function(digits, index, str) {
	// 递归终止条件，当index === digits的长度时，当前链路结束，将参数推入结果数组中
	if (index >= digits.length) return LETTER_MAP.res.push(str);
	// 获取当前数字对应的字符串
	let letters = LETTER_MAP[digits[index]];
	// 将字符串中每个包含的字母，都进行递归
	for (let i = 0; i < letters.length; i ++) {
		findCombination(digits, index + 1, str + letters[i]);
	}
}

var letterCombinations = function(digits) {
	if (!digits) return [];
	LETTER_MAP.res = [];
	// 递归
	findCombination(digits, 0, '');
	return LETTER_MAP.res;
};
