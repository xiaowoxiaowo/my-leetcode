/***
 * leetcode 237
 * 请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点。传入函数的唯一参数为 要被删除的节点 。
 * 
 * 
 * 例1：
 * 输入: head = [4,5,1,9], node = 5
 * 输出: [4,1,9]
 * 
 * 例2：
 * 输入: head = [4,5,1,9], node = 1
 * 输出: [4,5,9]
 * 
 * 提示:
 * node为需要删除的那个节点，可以赋值，不需要移动节点
 * 链表至少包含两个节点。
 * 链表中所有节点的值都是唯一的。
 * 给定的节点为非末尾节点并且一定是链表中的一个有效节点。
 * 不要从你的函数中返回任何结果。
 * 
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */

var deleteNode = function(node) {
	// 针对这题，其实可以不需要这种边界判断
	if (node === null) return;
	if (node.next === null) {
		node = null;
		return;
	}
	node.val = node.next.val;
	node.next = node.next.next;
};