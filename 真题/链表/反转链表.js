/***
 * leetcode 206
 * 反转一个单链表。
 * 
 * 
 * 例1：
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import { createLinkedList, printfLinkedList } from '@/utils';

// 迭代方式
var reverseList = function(head) {
	let pre = null, cur = head, next;
	while(cur !== null) {
		next = cur.next;
		cur.next = pre;
		pre = cur;
		cur = next;
	}
	return pre;
};

// 递归
// 思路，先进入递的操作，递到最下层，既当head.next.next == null的那一层，它的子层是直接返回head（最右侧的链表），然后进入归的操作。
// 然后将head.next.next = head，将当前链表的下一个链表指向自己，然后断开当前链表的next，返回head（最右侧的链表）。
// 一层层归，然后最终返回head（最右侧的链表）到头部
var reverseList = function(head) {
	if (head == null || head.next == null) {
		return head;
	}
	const newHead = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return newHead;
};

var test = createLinkedList([1,2,3,4,5]);
console.log(printfLinkedList(test));
var newHead = reverseList(test);
console.log(printfLinkedList(newHead));