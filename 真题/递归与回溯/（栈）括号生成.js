/***
 * leetcode 22
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 输入：n = 1
 * 输出：["()"]
 */
// 递归，栈的思路，用数值val和level来记录'('和')'
// 每次加一个'(', val + 1, 加一个')', val - 1以及给level + 1，level代表完整的()的数量
// 通过val和level的值，来判断当前是否还可以加'('或者')'
var generateParenthesis = function(n) {
  const res = [];
  if (n < 1) return res;
  const loop = (level, val, arr) => {
    // 如果level === n，说明n对括号已经生成完毕
    if (level === n) return res.push(arr);
    // 如果n - val - level > 0,说明还存在没有被使用的括号对数，可以继续遍历'('的情况，并给val加1
    if ((n - val - level) > 0) loop(level, val + 1, arr + '(');
    // 如果val是大于零的，说明括号还处于没有闭合的状态，还需要遍历')'的情况，并给val加1，level加1
    if (val > 0) loop(level + 1, val - 1, arr + ')');
  };
  // 递归开始，第一个字符只能是'(',所以val初始化是1
  loop(0, 1, '(');
  return res;
};

console.log(generateParenthesis(1));