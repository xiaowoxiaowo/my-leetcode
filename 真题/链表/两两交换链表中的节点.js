/***
 * leetcode 24
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 例1：
 * 输入: head = [1,2,3,4]
 * 输出: [2,1,4,3]
 * 
 * 例2：
 * 输入: head = []
 * 输出: []
 * 
 * 例3：
 * 输入: head = [1]
 * 输出: [1]
 * 
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
import { createLinkedList } from '@/utils';

var swapPairs = function(head) {
	let dummyNode = new ListNode(-1);
	dummyNode.next = head;
	let p = dummyNode;
	while(p.next && p.next.next) {
		const node1 = p.next;
		const node2 = node1.next;
		const next = node2.next;
		node2.next = node1;
		node1.next = next;
		p.next = node2;

		p = node1;
	}

	return retNode;
};

//递归的方法
var swapPairs = function (head) {
	if (!head || !head.next) return head
	var one = head
	var two = one.next
	var three = two.next

	two.next = one
	one.next = swapPairs(three)

	return two
};

var test = createLinkedList([1,2,3,4,5]);
swapPairs(test);