/***
 * leetcode 82
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 
 * 例1：
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 
 * 例2：
 * 输入: 1->1->1->2->3
 * 输出: 2->3
 * 
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var deleteDuplicates = function(head) {
	if (!head || !head.next) return head;
	let dummy = new ListNode(-1);
	dummy.next = head;
	let p = dummy, cur = p.next, n = cur;
	while(n != null) {
		n = n.next;
		if (n && cur.val === n.val) {
			continue;
		} else {
			p = cur;
			cur.next = n;
			cur = n;
		}
	}
	return dummy.next;
};