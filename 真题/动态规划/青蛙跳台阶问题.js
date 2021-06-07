/***
 * 剑指 Offer 10- II. 
 * 
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 * 
 * 输入：n = 2
 * 输出：2
 * 
 * 输入：n = 7
 * 输出：21
 * 
 * 输入：n = 0
 * 输出：1
 * 
 */
// 基础斐波那契数列
var numWays = function(n) {
  let first = 1;
  let second = 1;
  while(n - 1 > 0) {
    let b = second;
    second = (first + second) % 1000000007;
    first = b;
    n--;
  }
  return second;
};