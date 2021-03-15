/***
 * leetcode 203
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 * 
 * 
 * 例1：
 * 输入: head = [1,2,6,3,4,5,6], val = 6
 * 输出: [1,2,3,4,5]
 *
 * 例2：
 * 输入: head = [], val = 1
 * 输出: []
 * 
 * 例3：
 * 输入: head = [7,7,7,7], val = 7
 * 输出: []
 * 
 */

var removeElements = function(head, val) {
	// 定义一个假的head节点
	const dummyHead = new ListNode(-1);
	dummyHead.next = head;
	let cur = dummyHead;
	while(cur.next !== null) {
		if (cur.next.val === val) {
			const delNode = cur.next;
			cur.next = delNode.next;
			delNode.next = null;
		} else {
			cur = cur.next;
		}
	}
	// const retNode = dummyHead.next;
	// dummyHead.next = null;
	return dummyHead.next;
};