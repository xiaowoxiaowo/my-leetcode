/**
 * leetcode 141. 环形链表
 * 
 * 判断一个链表中是否有环存在。
 * 
 * 用O(1)的空间复杂度解决本题
 * 
 */
var hasCycle = function(head) {
  if (!head) return false;
  let slow = head, fast = head;
  while (fast) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return false;
    }
    if (slow === fast) return true;
  }
  return false;
};