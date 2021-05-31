/**
 * 剑指offer 64
 * 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 * 
 * 输入: n = 3
 * 输出: 6
 * 
 * 输入: n = 9
 * 输出: 45
 */
// 递归思路
var sumNums = function(n) {
  return n && n + sumNums(n - 1);
};