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
 * 正确的解决思路应该是队列的思路，把传入的数据直接当做一个队列。
 * 
 * hasNext的时候，判断当前第一个值是否为整数，是返回true，不是即为数组，将数组拍平，替换原来第一位的数据。
 * next的时候，就直接shift第一个值，获取值即可。
 * 
 */

// 队列思路
var NestedIterator = function (nestedList) {
  // 初始化
  this.queue = nestedList;
};

NestedIterator.prototype.hasNext = function () {
  while (this.queue.length) {
    // 如果第一位是整数，直接return
    if (this.queue[0].isInteger()) {
      return true;
    } else {
      // 如果是数组，拍平，然后替换第一个值
      let cur = this.queue[0].getList();
      this.queue.splice(0, 1, ...cur);
    }
  }
};

NestedIterator.prototype.next = function () {
  // 取值
  return this.queue.shift().getInteger();
};





// 深度优先搜索（递归实现，能够完成相应的功能，但是并不贴合题目中 迭代 这个概念）
var NestedIterator = function (nestedList) {
  this.res = [];
  this.index = 0;
  const dfs = (node) => {
    for(let i = 0; i < node.length; i ++) {
      let cur = node[i];
      if (cur.isInteger()) {
        this.res.push(cur.getInteger());
      } else {
        dfs(cur.getList());
      }
    }
  };
  dfs(nestedList);
};

NestedIterator.prototype.hasNext = function () {
  return this.index < this.res.length;
};

NestedIterator.prototype.next = function () {
  return this.res[this.index++];
};
