/***
 * leetcode 70
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 给定 n 是一个正整数。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 给你 n ，请计算 F(n) 。0 <= n <= 30
 * 
 * 
 * 例1：
 * 输入：2
 * 输出：2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 解题思路：
 * 动态规划的思路，n阶楼梯的爬法是基于下面的规律的f(n)= f(n - 1) + f(n - 2)
 *   1  2  3  4
 *   1  2  3  5
 */
var climbStairs = function(n) {
  let cache = [];
  cache[1] = 1;
  cache[2] = 2;
  for (let i = 3; i <= n; i ++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n]
};