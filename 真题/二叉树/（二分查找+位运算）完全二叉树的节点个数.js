/***
 * leetcode 222
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
 * 
 * 例1：
 * 输入: root = [1,2,3,4,5,6]
 * 输出: 6
 * 
 * 输入: root = []
 * 输出: 0
 * 
 * 输入: root = [1]
 * 输出: 1
 * 
 * 
 * 解题思路：
 * 深度优先遍历就不说了，比较简单，而且适用于所有的二叉树O(n)。
 * 
 * 因为是完全二叉树，所以可以使用 二分查找+位运算 的思路来处理O(logn * logn),具体过程如下
 */

// 深度优先遍历，暴力解法，适用于所有的二叉树节点个数统计
var countNodes = function(root) {
  if (!root) return 0;
  let left = countNodes(node.left);
  let right = countNodes(node.right);
  return left + right + 1;
};



// 二分查找 + 位运算 时间复杂度 O(logn * logn)
//                  1
//                /   \
//              2       3
//            /  \     /  \   
//           4    5    6   7
//          /\   /\   /\    /\
//         8 9 10 11 12 13 14 15
//
// 通过位运算，计算当前节点是否存在二叉树中
// 举个例子，比如我想判断一个12的值是否存在于二叉树中
// 12的二进制是1100,代表从1开始，1（右节点）-> 0（左节点）0（左节点）
// 只需要用最深层级上一级最左边的那个值用&去对比即可，这里是4，二进制是100;
// 12   1100  1100  1100  
//  4   0100  0010  0001
// 三次&，为true,false,false。代表1 -> 右节点-> 左节点 -> 左节点
// 只要最终这个值存在，当前节点即存在
const exists = (root, level, mid) => {
  // 获取最深层级上一级最左边的值
  let bits = 1 << (level - 1);
  let node = root;
  // 设置终止条件
  while (node !== null & bits > 0) {
    // 位与
    if (bits & mid) {
      // true为右节点，反之为左节点
      node = node.right;
    } else {
      node = node.left;
    }
    // 位右移
    // 这个也相当于是Math.floor(bits/2)
    bits = bits >> 1;
  }
  return node !== null;
}

var countNodes = function(root) {
  if (!root) return 0;
  let level = 0, node = root;
  // 获取二叉树层级
  // 因为是完全二叉树，所以左节点一直遍历到底肯定是最深的层级
  while(node.left) {
    level++;
    node = node.left;
  }
  // 1 << level 是2的level次方
  // 假如一个二叉树每层的节点数如下 1, 2, 4, x（x代表最终层未知的节点数）
  // level是层数,每一层的节点数都是在 2^level(只有一个节点) 和 2^(level + 1) - 1（满节点） 这个区间内的
  // 所以可以对这个区间进行二分查找，找到最终的节点数
  let min = 1 << level, max = (1 << (level + 1)) - 1, mid;
  // 二分查找
  while (min < max) {
    mid = Math.floor((max - min + 1)/2) + min;
    // 判断二叉树是否存在当前节点
    if (exists(root, level, mid)) {
      min = mid;
    } else {
      max = mid - 1;
    }
  }
  return min;
}


























const exists = (root, level, k) => {
  let bits = 1 << (level - 1);
  let node = root;
  while (node !== null && bits > 0) {
    // k     1100
    // bits  0100
    if (!(bits & k)) {
        node = node.left;
    } else {
        node = node.right;
    }
    bits >>= 1;
  }
  return node !== null;
}

var countNodes = function(root) {
  if (!root) return 0;
  let level = 0;
  let node = root;
  while (node.left) {
      level++;
      node = node.left;
  }
  // 1 << n 就是2的n次方
  let low = 1 << level, high = (1 << (level + 1)) - 1;
  while (low < high) {
      const mid = Math.floor((high - low + 1) / 2) + low;
      if (exists(root, level, mid)) {
          low = mid;
      } else {
          high = mid - 1;
      }
  }
  return low;
};
