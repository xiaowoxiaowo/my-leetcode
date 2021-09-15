/**
 * leetcode 65. 有效数字
 *
 * 有效数字（按顺序）可以分成以下几个部分：
 *   1.一个 小数 或者 整数
 *   2.（可选）一个 'e' 或 'E' ，后面跟着一个 整数
 * 
 * 小数（按顺序）可以分成以下几个部分：
 *   1.（可选）一个符号字符（'+' 或 '-'）
 *   2.下述格式之一
 *       1.至少一位数字，后面跟着一个点 '.'
 * 			 2.至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
 * 			 3.一个点 '.' ，后面跟着至少一位数字
 * 
 *  整数（按顺序）可以分成以下几个部分：
 * 		1.（可选）一个符号字符（'+' 或 '-'）                                              
 * 		2.至少一位数字
 * 
 * 部分有效数字列举如下：
 * ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"]
 * 
 * 部分无效数字列举如下：
 * ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"]
 * 
 * 
 * 0-9(跟任何), +-(数字，.，唯二), eE(数字，+-，唯一), .(数字，结尾，唯一)
 * 
 * 给你一个字符串 s ，如果 s 是一个 有效数字 ，请返回 true 。
 * 
 * 输入：s = "0"
 * 输出：true
 * 
 * 输入：s = "e"
 * 输出：false
 * 
 * 输入：s = "."
 * 输出：false
 * 
 * 输入：s = ".1"
 * 输出：true
 * 
 * 说明：
 * s 仅含英文字母（大写和小写），数字（0-9），加号 '+' ，减号 '-' ，或者点 '.' 。
 * 
 */
// 遍历所有情况的写法，其实可以使用有限状态机思路（需要学习一下编译原理相关）
var isNumber = function(s) {
	if (!s) return false;
	const len = s.length;
	const regRes = s.match(/[a-zA-Z]/g) || [];
	if (regRes.length > 1) return false;
	if (regRes.length === 1 &&  ['e', 'E'].indexOf(regRes[0]) === -1) return false;
	const isNumber = (str) => /^[0-9]$/.test(str);
	const isE = (str) => str === 'e' || str === 'E';
	if (isE(s[0]) || isE(s[len - 1])) return false;
	if (len === 1 && (s[0] === '+' || s[0] === '-' || s[0] === '.')) return false;
	// +-数字，eE，.，数字的个数
	const flag = [0, 0, 0, 0];
	let next = ['number', '.', '+-'];
	let canOver = true;
	for (let i = 0; i < len; i ++) {
		if (isNumber(s[i])) {
			flag[3]++;
			if (flag[1] >= 1) {
				next = ['number'];
			} else {
				next = ['number', 'e', '.'];
			}
			canOver = true;
		} else if (isE(s[i])) {
			if (flag[1] > 0 || next.indexOf('e') === -1) return false;
			flag[1]++;
			flag[0] = 0;
			next = ['+-', 'number'];
			canOver = false;
		} else if (s[i] === '.') {
			if (flag[2] > 0 || next.indexOf('.') === -1) return false;
			flag[2]++;
			if (flag[3] === 0) {
				next = ['number'];
				canOver = false;
			} else {
				next = ['number', 'e'];
			}
		} else {
			if (flag[0] > 0 || next.indexOf('+-') === -1) return false;
			flag[0]++;
			canOver = false;
			next = ['.', 'number'];
		}
	}
	return canOver;
};

var test = [".e1"];
for (let i = 0; i < test.length; i ++) {
	console.log(isNumber(test[i]));
}