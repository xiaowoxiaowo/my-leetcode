/**
 * leetcode 738
 *
 * 给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。
 * （当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）
 * 
 * 输入: N = 10
 * 输出: 9
 * 
 * 输入: N = 1234
 * 输出: 1234
 * 
 * 输入: N = 332
 * 输出: 299
 * 
 */

// 贪心思路，从左往右找到list[i] > list[i + 1]的项，将i的值减1，然后将[i...list.length - 1]的值都设为9，保证满足条件中小于而且是最大的条件
var monotoneIncreasingDigits = function(n) {
	if (n < 10) return n;
	const list = String(n).split('');
	const loop = () => {
		for (let i = 0; i < list.length - 1; i ++) {
			if (list[i] > list[i + 1]) {
				list[i] = Number(list[i]) - 1;
				while (i < list.length - 1) {
					list[i + 1] = 9;
					i ++;
				}
				loop();
			}
		}
	};
	loop();
	return Number(list.join(''));
};

console.log(monotoneIncreasingDigits(332));