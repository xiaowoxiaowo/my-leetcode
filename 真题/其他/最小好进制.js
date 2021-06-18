/**
 * leetcode 483. 最小好进制
 *
 * 对于给定的整数 n, 如果n的k（k>=2）进制数的所有数位全为1，则称 k（k>=2）是 n 的一个好进制。
 * 以字符串的形式给出 n, 以字符串的形式返回 n 的最小好进制。
 * 
 * 输入："13"
 * 输出："3"
 * 解释：13 的 3 进制是 111。
 * 
 * 输入："4681"
 * 输出："8"
 * 解释：4681 的 8 进制是 11111。
 * 
 * 输入："1000000000000000000"
 * 输出："999999999999999999"
 * 解释：1000000000000000000 的 999999999999999999 进制是 11。
 * 
 * 说明：
 * 输入总是有效且没有前导 0。
 */
// 暴力解法，时间会超出，可以通过二分法进行优化
var smallestGoodBase = function(n) {
	n = Number(n);
	const len = Math.ceil(Math.log2(n));
	for (let l = len; l > 2; l --) {
		for (let i = 2; i < n; i ++) {
			let sum = 0;
			let isBig = false;
			for (let j = l - 1; j >= 0; j --) {
				sum += Math.pow(i, j);
				if (sum > n) {
					isBig = true;
					break;
				}
			}
			if (isBig) break;
			if (sum === n) return String(i);
		}
	}
	return String(n - 1);
};

console.log(smallestGoodBase("1000000000000000000"));

var smallestGoodBase = function (n) {
  let ans = BigInt(n) - BigInt(1)
  for (let s = 59; s >= 2; s--) {
    const k = BigInt(Math.floor(Math.pow(n, 1 / s)))
    if (k > 1) {
      let sum = BigInt(1)
      let mul = BigInt(1)
      for (let i = 1; i <= s; i++) {
        mul *= k
        sum += mul
      }
      if (sum === BigInt(n)) {
        ans = k
        break
      }
    }
  }

  return ans + ''
}