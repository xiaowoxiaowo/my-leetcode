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
 * 解题思路：
 * 
 * 因为是以 k 数量为一组组来进行翻转，所以我们需要取出一个个有 k 数量节点的链表。取出之后，对该链表进行翻转。
 * 思路比较简单，不过中间需要注意的细节以及边界情况需要细细梳理。
 */
import { createLinkedList, printfLinkedList, ListNode } from '@/utils';

// 翻转链表，参考 反转链表2 的思路，将链表节点一个个往最左边移动。需要传入两个节点以及遍历次数
var reverseList = function(pre, left, k) {
  let cur = left;
  while(k > 1) {
    let next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
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
    // 获取存在 k 数量节点的链表，存储该链表最右侧的节点
    for (let i = 0; i < k - 1; i ++) {
      // 如果链表剩余节点数量不足 k，不需要再翻转，提前退出
      if (!right.next) return dummy.next;
      right = right.next;
    }
    // 存储上一个链表最右侧节点的下一个节点，作为下次获取 k 数量节点时的头节点
    let next = right.next;
    // 传入链表的上一个节点，头节点，以及需要翻转元素的个数。对链表进行翻转
    reverseList(p, left, k);
    // 重置标记点，注意，这里的left一开始是上一个链表的头节点，翻转之后，变成了上一个链表的尾节点。
    // 也就是下一个链表的上一个节点
    p = left;
    left = next;
    right = next;
  }
  return dummy.next;
};

var test1 = createLinkedList([1,2,3,4,5]);
console.log(printfLinkedList(reverseKGroup(test1, 3)));