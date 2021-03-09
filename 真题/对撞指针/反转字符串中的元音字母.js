/***
 * leetcode 345
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母(a,e,i,o,u)。
 * 
 * 例1：
 * 输入: "hello"
 * 输出: "holle"
 * 
 * 例2:
 * 输入："leetcode"
 * 输出："leotcede"
 * 
 */
import { swap, pritnf } from '../../src/utils';

function isVowel(word) {
	return /[aeiouAEIOU]/.test(word);
}

var reverseVowels = function(s) {
  const len = s.length;
  if (len <= 1 ) return s;
	s = s.split('');
	let l = 0, r = len - 1;
	while(l < r) {
		if (!isVowel(s[l])) {
			l++;
			continue;
		}
		if (!isVowel(s[r])) {
			r--;
			continue;
		}
		[s[l], s[r]] = [s[r], s[l]];
		l++;
		r--;
	}
	return s.join('');
};

var test = "hello";
reverseVowels(test)
pritnf(test, 2);