/***
 * leetcode 92
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 
 * 1 ≤ m ≤ n ≤ 链表长度。
 * 
 * 例1：
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 *  
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 * 
 * 解题思路：
 * 
 * 只需要反转m到n的链表，只需要遍历这一段，将每一个值都依次放到这段最左边即可。
 * 1->2->3->4->5->NULL, m = 2, n = 4
 * 依次遍历
 * 一. 3放到这一段最左侧
 * 1->3->2->4->5->NULL
 * 二. 4放到这一段最左侧
 * 1->4->3->2->5->NULL
 * 三. 完成
 * 
 * 我们只需要通过三个值就可以完成位置互换
 * m的前一个值pre, 当前值cur（一直都是m初始位置的那个值，只是位置在不停交换）,cur的下一个值next
 */
import { createLinkedList, printfLinkedList } from '@/utils';

var reverseBetween = function(head, left, right) {
  // 链表问题的一般处理，不需要再去处理head的变更
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let pre = dummyNode;
  for (let i = 0; i < left - 1; i ++) {
    // 遍历得到left前一个位置的链表
    pre = pre.next;
  }
  // 得到left位置的链表，作为当前cur
  let cur = pre.next, next;
  // 遍历需要处理的位置间隔
  for (let i = 0; i < right - left; i ++) {
    next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }
  return dummyNode.next;
};



var linkList = createLinkedList([1,2,3,4,5]);
console.log(printfLinkedList(linkList));

var res = reverseBetween(linkList, 2, 4);
console.log(printfLinkedList(res));
