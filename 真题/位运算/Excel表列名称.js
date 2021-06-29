/***
 * leetcode 168. Excel表列名称
 * 
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * 
 * 1 -> A
 * 2 -> B
 * 3 -> C
 * ...
 * 26 -> Z
 * 27 -> AA
 * 28 -> AB 
 * ...
 * 
 * 输入: 1
 * 输出: "A"
 * 
 * 输入: 28
 * 输出: "AB"
 * 
 * 输入: 701
 * 输出: "ZY"
 * 
 */
// 类似26进制转换，但是跟真正的26进制还是有区别，
// 一般的26进制，0-25
// 该题中的26进制, 1-26
// 所以可以在每一步转换的时候先减1，变成真正的26进制
var convertToTitle = function(columnNumber) {
  let res = '';
  while (columnNumber >= 1) {
    columnNumber--;
    res = String.fromCharCode(65 + columnNumber % 26) + res;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return res;
};

console.log(convertToTitle(28));
