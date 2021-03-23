/***
 * leetcode 341
 * 给你一个嵌套的整型列表。请你设计一个迭代器，使其能够遍历这个整型列表中的所有整数。
 * 
 * 列表中的每一项或者为一个整数，或者是另一个列表。其中列表的元素也可能是整数或是其他列表。
 * 
 * 输入: [[1,1],2,[1,1]]
 * 输出: [1,1,2,1,1]
 * 解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,1,2,1,1]。
 * 
 * 输入: [1,[4,[6]]]
 * 输出: [1,4,6]
 * 解释: 通过重复调用 next 直到 hasNext 返回 false，next 返回的元素的顺序应该是: [1,4,6]。
 * 
 * 自带有三个方法，isInteger判断是否是整数，getInteger获取整数，getList获取列表
 * 
 * 需要实现这样的功能
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 * 
 * 解题思路：
 * 
 * 
 * 
 */

// 深度优先搜索
var NestedIterator = function (nestedList) {
  let res = [];
  const dfs = (node) => {
    for(let i = 0; i < node.length; i ++) {
      let cur = node[i];
      if (cur.isInteger()) {
        res.push(cur.getInteger());
      } else {
        dfs(cur.getList());
      }
    }
  };
  dfs(nestedList);
};

NestedIterator.prototype.hasNext = function () {

};

NestedIterator.prototype.next = function () {

};















// 栈思路
var NestedIterator = function(nestedList) {
  this.stack = nestedList;
};

NestedIterator.prototype.hasNext = function() {
  while (this.stack.length !== 0) {
      if (this.stack[0].isInteger()) {
          return true;
      } else {
          let cur = this.stack[0].getList();
          this.stack.shift();
          this.stack.unshift(...cur);
      }
  }
};

NestedIterator.prototype.next = function() {
  return this.stack.shift().getInteger();
};