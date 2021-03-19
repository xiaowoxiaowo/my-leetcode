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
 * 解题思路：
 * 插入排序的思路，但是要注意数组和链表的差异，数组需要把大于当前值的项一个个都向右移动一位，链表只需要插入到相应位置即可，
 * 其他项不需要变动，而且链表前面如果有新项插入，遍历的当前值不需要移动（不会影响后续位置关系）。
 */
import { createLinkedList, printfLinkedList, ListNode } from '@/utils';

var insertionSortList = function(head) {
  if (!head || !head.next) return head;
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let pre = head, cur = head.next;
  while(cur) {
    if (cur.val >= pre.val) {
      pre = cur;
    } else {
      let i = dummyHead;
      while(i.next.val <= cur.val) {
        i = i.next;
      }
      pre.next = cur.next;
      cur.next = i.next;
      i.next = cur;
    }
    cur = pre.next;
  }
  return dummyHead.next;
}

var test1 = createLinkedList([4,2,1,3]);
var test2 = createLinkedList([-1,5,3,4,0]);

console.log(printfLinkedList(insertionSortList(test1)));
console.log(printfLinkedList(insertionSortList(test2)));
