/***
 * leetcode 20
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 例1：
 * 输入: s = "()[]{}"
 * 输出: true
 * 
 * 例2：
 * 输入: s = "{[]}"
 * 输出: true
 * 
 * 解题思路：
 * 通过栈的思路，匹配最近的两个相邻元素，符合情况的推出栈，当匹配完成，最后栈中不存在多余的元素，即字符串有效。
 * 当相邻的两个元素，为不同的开关括号，可以提前退出
 * 
 */

var STR_OBJ = {
	'(': 1,
	'{': 2,
	'[': 3,
	')': -1,
	'}': -2,
	']': -3
};

var isValid = function(s) {
	if (s.length < 2) return false;
	const stack = [s[0]];
	if (STR_OBJ[s[0]] < 0) return false;
	for (let i = 1; i < s.length; i ++) {
		const cur = s[i];
		if (STR_OBJ[cur] > 0) {
			stack.push(cur);
		} else {
			if ((STR_OBJ[stack.pop()] + STR_OBJ[cur]) !== 0) return false;
		}
	}
	if (stack.length > 0) return false;
	return true;
};