/***
 * leetcode 125
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 本题中，我们将空字符串定义为有效的回文串。
 * 
 * 例1：
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 例2:
 * 输入："race a car"
 * 输出：false
 * 
 * 提示: ''  ','  '.,'这些都属于有效回文串
 * 
 */
import { pritnf } from '../../src/utils';

function isWord (word) {
	return /[a-zA-Z0-9]/.test(word);
}

var isPalindrome = function(s) {
	const len = s.length;
	if (len <= 1) return true;
	let l = 0, r = len - 1;
	while(l < r) {
		if(!isWord(s[l])) {
			l++;
			continue;
		}
		if(!isWord(s[r])) {
			r--;
			continue;
		}
		if (s[l].toUpperCase() !== s[r].toUpperCase()) return false;
		l++;
		r--;
	}
	return true;
};

var test = ".,";
pritnf(isPalindrome(test), 2);