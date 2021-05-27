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

var generateParenthesis = function(n) {
  const res = [];
  if (n < 1) return res;
  const loop = (level, val, arr) => {
    if (level === n) return res.push(arr);
    if ((n - val - level) > 0) loop(level, val + 1, arr + '(');
    if (val > 0) loop(level + 1, val - 1, arr + ')');
  };
  loop(0, 1, '(');
  return res;
};

console.log(generateParenthesis(1));