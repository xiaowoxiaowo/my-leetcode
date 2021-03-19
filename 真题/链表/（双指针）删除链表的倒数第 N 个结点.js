/***
 * leetcode 19
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。(一趟扫描实现)
 * 
 * 
 * 例1：
 * 输入: head = [1,2,3,4,5], n = 2
 * 输出: [1,2,3,5]
 * 
 * 例2：
 * 输入: head = [1], n = 1
 * 输出: []
 * 
 * 例3：
 * 输入: head = [1,2], n = 1
 * 输出: [1]
 * 
 * 解题思路：
 * 双指针思路，为了删除这个节点，我们需要知道这个节点之前的节。一个指针保持在右侧，一个指针保持左侧N+1的距离。当右侧指针不为null
 * 时，同时移动两个指针向右移动
 *
 */

import { createLinkedList, printfLinkedList, ListNode } from '@/utils';

var removeNthFromEnd = function(head, n) {
	if (n <=  0) return head;
	if (!head) return head;
	const dummy = new ListNode(-1);
	dummy.next = head;
	let left = dummy, right = dummy;
	// 控制两个指针之间的距离
	for (let i = 0; i < n + 1; i++) {
		if (!right) return head;
		right = right.next;
	}
	// 两指针遍历
	while(right) {
		left = left.next;
		right = right.next;
	}
	// 删除目标节点
	left.next = left.next.next;
	return dummy.next;
};