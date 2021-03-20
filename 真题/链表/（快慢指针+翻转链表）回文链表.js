/***
 * leetcode 234
 * 请判断一个链表是否为回文链表。
 * 
 * 用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题
 * 
 * 例1：
 * 输入: 1->2
 * 输出: false
 * 
 * 例2：
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 解题思路：
 * 如果不考虑 O(1) 空间复杂度，那就把值取到数组中，然后对撞指针进行判断。
 * 
 * 如果需要 O(1) 空间复杂度，先用快慢指针，从链表的中间将链表断开，然后翻转右边这段链表，
 * 然后一个个比较，如果值都是一致的，那就判断为回文链表。
 *
 */

import { createLinkedList, printfLinkedList, ListNode } from '@/utils';

var isPalindrome = function(head) {
  if (!head || !head.next) return true;
  let pre, slow = head, fast = head;
  // 快慢指针
  while(fast && fast.next) {
    pre = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // 从中间将链表断开
  pre.next = null;
  // 翻转链表，head2为后半段链表头
  let head2 = null, cur = slow, next;
  while(cur) {
    next = cur.next;
    cur.next = head2;
    head2 = cur;
    cur = next;
  }
 // 两个链表比较
  while (head && head2) {
    if (head.val !== head2.val) return false;
    head = head.next;
    head2 = head2.next;
  }

  return true;
};

var test1 = createLinkedList([1,2]);
var test2 = createLinkedList([1,2,2,1]);

console.log(isPalindrome(test1));
console.log(isPalindrome(test2));
