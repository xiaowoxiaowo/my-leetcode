/***
 * leetcode 82
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 * 
 * 
 * 例1：
 * 输入: -1->1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 
 * 例2：
 * 输入: 1->1->1->2->3
 * 输出: 2->3
 * 
 * 解题思路：
 * 有点类似双指针的思路，定义一个当前的指针c,让这个c和c.next两两比较，还需要定义一个f来记录当前是否存在相等的值。
 * 
 */

import { createLinkedList, printfLinkedList, ListNode } from '@/utils';

var deleteDuplicates = function(head) {
	if (!head || !head.next) return head;
	let dummy = new ListNode(-1);
	dummy.next = head;
	let p = dummy, c = p.next, f = false;
	while(c.next) {
		// c和c.next两两比较
		if (c.val === c.next.val) {
			f = true;
		} else {
			if (f) {
				// 如果存在相等,将p.next指向c.next，这里不能直接等于，因为后面的值可能也是两两相等的
				p.next = c.next;
				f = false;
			} else {
				// 两值不相等，而且f不为true，直接等于
				p = c;
			}
		}
		c = c.next;
	}
	// 处理在null之前的链表都是相等的情况
	if (f) {
		p.next = null;
	}
	return dummy.next;
};

var test1 = createLinkedList([1,2,3,3,4,4,5]);
var test2 = createLinkedList([1,1,1,2,3]);
console.log(printfLinkedList(deleteDuplicates(test1)));
console.log(printfLinkedList(deleteDuplicates(test2)));