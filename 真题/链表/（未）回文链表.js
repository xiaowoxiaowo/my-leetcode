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
 * 
 *
 */

import { createLinkedList, printfLinkedList, ListNode } from '@/utils';

var isPalindrome = function(head) {

};

var test1 = createLinkedList([1,2]);
var test2 = createLinkedList([1,2,2,1]);

console.log(isPalindrome(test1));
console.log(isPalindrome(test2));


const isPalindrome = (head) => {
  if (head == null || head.next == null) {
    return true;
  }
  let fast = head;
  let slow = head;
  let prev;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;  // 断成两个链表
  // 翻转后半段
  let head2 = null;
  while (slow) {
    const tmp = slow.next;
    slow.next = head2;
    head2 = slow;
    slow = tmp;
  }
  // 比对
  while (head && head2) {
    if (head.val != head2.val) {
      return false;
    }
    head = head.next;
    head2 = head2.next;
  }
  return true;
};