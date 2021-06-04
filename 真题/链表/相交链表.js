/***
 * 160. 相交链表
 * 
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
 * 
 * 图示两个链表在节点 c1 开始相交：
 * A        a1 -> a2 
 *                  \
 *                    c1 -> c2 -> c3
 *                  /
 * B  b1 -> b2 -> b3
 * 
 * 题目数据 保证 整个链式结构中不存在环。
 * 
 * 注意，函数返回结果后，链表必须 保持其原始结构 。
 *  
 */

// 常见的思路，维护一个查找表记录一个链表所有值
// 遍历另一个链表，每次都去查找表寻找是否存在该链表，如果存在返回。如果遍历完还是没有找到，返回null
var getIntersectionNode = function(headA, headB) {
  const visited = new Set();
  let temp = headA;
  while (temp !== null) {
      visited.add(temp);
      temp = temp.next;
  }
  temp = headB;
  while (temp !== null) {
      if (visited.has(temp)) {
          return temp;
      }
      temp = temp.next;
  }
  return null;
};

// 巧妙的思路，感觉在类似这种需要遍历分叉节点的时候很有用
// 实现的思路，就是遍历A+B的节点，pA先遍历链表A，然后再遍历链表B。pB先遍历链表B，然后遍历链表A。
//
// 假设两个链表没有相交，A的长度为m, B的长度为n
// pA的遍历距离为m + n, pB的遍历距离为n + m，它们会同时遍历到null
//
// 假设两个链表有相交，A在相交节点之前的长度为a，B在相交节点之前的长度为b，相交之后的长度都为c
// pA的遍历距离为a + c + b，pB的遍历距离为b + c + a，它们会同时遍历到相交节点。
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let pA = headA, pB = headB;
  while (pA !== pB) {
      pA = pA === null ? headB : pA.next;
      pB = pB === null ? headA : pB.next;
  }
  return pA;
};