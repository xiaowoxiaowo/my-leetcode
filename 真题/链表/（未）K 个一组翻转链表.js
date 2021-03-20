/***
 * leetcode 25
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 
 * 设计一个只使用常数额外空间的算法来解决此问题
 * 需要实际进行节点交换。
 * 
 * 
 * 例1：
 * 输入: head = [1,2,3,4,5], k = 2
 * 输出: [2,1,4,3,5]
 * 
 * 例2：
 * 输入: head = [1,2,3,4,5], k = 3
 * 输出: [3,2,1,4,5]
 * 
 * 例3：
 * 输入: head = [1,2,3,4,5], k = 1
 * 输出: [1,2,3,4,5]
 * 
 * [1,2,3] 4
 * 
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
import { createLinkedList, printfLinkedList, ListNode } from '@/utils';

var reverseList = function(pre, left, k) {
  let cur = left;
  while(k > 1) {
    let next = cur.next;
    cur.next = next.next;
    next.next = cur;
    pre.next = next;
    k--;
  }
}

var reverseKGroup = function(head, k) {
  if (k === 1 || !head || !head.next) return head;
  let dummy = new ListNode(-1);
  dummy.next = head;
  let p = dummy, left = head, right = head;
  while(right && right.next) {
    for (let i = 0; i < k - 1; i ++) {
      if (!right) return dummy.next;
      right = right.next;
    }
    reverseList(p, left, k);
    p = left;
    if (!right) return dummy.next;
    let next = right.next;
    left = next;
    right = next;
  }
  return dummy.next;
};

var test1 = createLinkedList([1,2,3,4,5]);
console.log(printfLinkedList(reverseKGroup(test1, 2)));