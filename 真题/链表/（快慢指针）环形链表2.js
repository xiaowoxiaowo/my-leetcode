/**
 * leetcode 142. 环形链表2
 * 
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
 * 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。
 * 
 * 说明：不允许修改给定的链表。
 * 进阶：你是否可以使用 O(1) 空间解决此题？
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：返回索引为 1 的链表节点
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：返回索引为 0 的链表节点
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 输入：head = [1], pos = -1
 * 输出：返回 null
 * 解释：链表中没有环。
 * 
 * 
 * 相遇时，慢指针走的距离：D+S1,S1代表慢指针在环里的移动距离，S2代表环的剩余距离
 * 假设相遇时快指针已经绕环 n 次，它走的距离：D+n(S1+S2)+S1
 * 因为快指针的速度是 2 倍，所以相同时间走的距离也是 2 倍：
 * D+n(S1+S2)+S1 = 2(D+S1)
 * 即 (n-1)S1+ S2=D
 * 我们不关心绕了几次环，取 n = 1 这种特定情况，消掉 S1：
 * D=S2
 * 
 */
// 佛洛依德理论，快慢指针，当两个指针相遇时，设置一个新的指针在开头位置。
// 慢指针和新指针不断加1,最终相遇的节点即为入环节点
var detectCycle = function(head) {
  if (!head) return null;
  let slow = head, fast = head;
  while(fast) {
    slow = slow.next;
    if (fast.next) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (fast === slow) {
      fast = head;
      while (fast !== slow) {
        fast = fast.next;
        slow = slow.next;
      } 
      return fast;
    }
  }
  return null;
}