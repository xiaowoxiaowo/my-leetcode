/***
 * leetcode 147
 * 对链表进行插入排序。
 * 
 * 
 * 你可以设计一个只使用常数额外空间的算法来解决此问题吗？
 * 
 * 
 * 例1：
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 * 
 * 
 * 例2：
 * 输入:  -1->5->3->4->0
 * 输出: -1->0->3->4->5
 * 
 * 
 */
import { createLinkedList, printfLinkedList, ListNode } from '@/utils';

var insertionSortList = function(head) {
  if (!head || !head.next) return head;
  const dummy = new ListNode(-1);
  dummy.next = head;
  let pre = dummy.next, cur = pre.next, i = 1, link;
  while(cur) {
    link = dummy;
    for (let j = 0; j < i; j ++) {
      if (link.next.val > cur.val) {
        pre.next = cur.next;
        cur.next = link.next;
        link.next = cur;
        cur = pre;
        break;
      }
      link = link.next;
    }
    pre = cur;
    cur = cur.next;
    i++;
  }
  return dummy.next;
};

var test1 = createLinkedList([4,2,1,3]);
var test2 = createLinkedList([-1,5,3,4,0]);

console.log(printfLinkedList(insertionSortList(test1)));
console.log(printfLinkedList(insertionSortList(test2)));


var insertionSortList = function(head) {
  if (head === null) {
      return head;
  }
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let lastSorted = head, curr = head.next;
  while (curr !== null) {
      if (lastSorted.val <= curr.val) {
          lastSorted = lastSorted.next;
      } else {
          let prev = dummyHead;
          while (prev.next.val <= curr.val) {
              prev = prev.next;
          }
          lastSorted.next = curr.next;
          curr.next = prev.next;
          prev.next = curr;
      }
      curr = lastSorted.next;
  }
  return dummyHead.next;
};
