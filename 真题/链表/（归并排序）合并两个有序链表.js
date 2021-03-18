/***
 * leetcode 21
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 
 * 例1：
 * 输入: l1 = [1,2,4], l2 = [1,3,4]
 * 输出: [1,1,2,3,4,4]
 * 
 * 例2：
 * 输入: l1 = [], l2 = []
 * 输出: []
 * 
 * 例3：
 * 输入: l1 = [], l2 = [0]
 * 输出: []
 * 
 * 两个链表的节点数目范围是 [0, 50]
 * -100 <= Node.val <= 100
 * l1 和 l2 均按 非递减顺序 排列
 * 
 * 解题思路：
 * 归并排序的思路，两个链表，从头开始两两比较
 */

var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  const dummy = new ListNode(-1);
  let left = l1, right = l2, res = dummy;
  while(left || right) {
    let cur;
    if (right && (!left || (left.val > right.val))) {
      cur = right;
      right = right.next;
    } else {
      cur = left;
      left = left.next;
    }
    res.next = cur;
    res = cur;
  }
  return dummy.next
};