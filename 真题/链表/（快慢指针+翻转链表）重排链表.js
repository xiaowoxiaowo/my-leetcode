/***
 * leetcode 143
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 例1：
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 * 
 * 例2：
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
 * 
 * 
 * 解题思路：
 *  
 * 下面的题解是O(1)的空间复杂度，应用的是链表的操作。
 * 
 * 也可以使用数组的思路，遍历链表，将一个个节点存储到数组中，然后使用对撞指针，重新将链表排序，O(n)空间复杂度
 * 
 *  
 */

import { createLinkedList, printfLinkedList, ListNode } from '@/utils';

// 链表操作思路，快慢指针 + 翻转链表 + 合并链表，O(1)空间复杂度
var reorderList = function(head) {
  if (!head || !head.next) return head;
  // 快慢指针找到中间点
  let slow = head, fast = head;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let rightHead = slow.next;
  // 断开链表
  slow.next = null;
  // 翻转断开后右侧的链表
  let head2 = null;
  while(rightHead) {
    let next = rightHead.next;
    rightHead.next = head2;
    head2 = rightHead;
    rightHead = next;
  }
  // 然后将右侧的链表间隔插入到左侧的链表当中
  let resList = head;
  while(head2) {
    let next1 = resList.next;
    let next2 = head2.next;
    resList.next = head2;
    head2.next = next1;
    head2 = next2;
    resList = next1;
  }
  return head;
};

var test1 = createLinkedList([1,2,3,4,5]);
// var test2 = createLinkedList([-1,5,3,4,0]);

console.log(printfLinkedList(reorderList(test1)));
// console.log(printfLinkedList(insertionSortList(test2)));
