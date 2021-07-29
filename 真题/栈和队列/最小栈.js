/**
 * leetcode 155. 最小栈
 * 
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * push(x) —— 将元素 x 推入栈中
 * pop() —— 删除栈顶的元素。
 * top() —— 获取栈顶元素。
 * getMin() —— 检索栈中的最小元素。
 * 
 * 输入：
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * 
 * 输出：[null,null,null,null,-3,null,0,-2]
 * 
 */
// 创建一个辅助栈记录最小值
// 因为栈是先进后出，一个值退出栈的时候，它右侧的值都会被退出栈
// 所以先入栈一个值，只要后续所有的入栈的值比它大，都可以设置辅助栈中的最小值为之前的那个值
var MinStack = function() {
  this.stack = [];
  this.minStack = [Infinity];
};
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  // 如果新入栈的值比当前的最小值大，就设置为当前最小值
  // 如果比最小值小，就存入这个新的最小值
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
};
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.minStack.pop();
};
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};