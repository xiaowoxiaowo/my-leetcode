/***
 * leetcode 1190
 * 给出一个字符串 s（仅含有小写英文字母和括号）。
 * 请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。
 * 注意，您的结果中 不应 包含任何括号。
 * 
 * 输入：s = "(abcd)"
 * 输出："dcba"
 * 
 * 输入：s = "(u(love)i)"
 * 输出："iloveu"
 * 
 * 输入：s = "(ed(et(oc))el)"
 * 输出："leetcode"
 * 
 * 输入：s = "a(bcdefghijkl(mno)p)q"
 * 输出："apmnolkjihgfedcbq"
 * 
 */
// 栈思路，从左到右把字符串一个个推入栈，当推入的字符是')'时，需要进行反转
// 将栈中的字符串一个个pop出来，push进一个reverseArr数组中，直到栈中的'('被pop出来为止
// reverseArr就是一个反转过的数组，再把它push入栈中。继续找寻')',重复上面的过程
var reverseParentheses = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i ++) {
    const str = s[i];
    if (str === ')') {
      // 为')',将到上一个'('的所有字符串反转
      const reverseArr = [];
      let index = stack.pop();
      while (index !== '(') {
        reverseArr.push(index);
        index = stack.pop();
      }
      // 反转完毕，重新推入stack栈中，这里的'()'字符也已经被处理
      stack = [...stack, ...reverseArr];
    } else {
      // 不为')',推入stack中
      stack.push(s[i]);
    }
  }
  return stack.join('');
};

console.log(reverseParentheses('(ed(et(oc))el)'));