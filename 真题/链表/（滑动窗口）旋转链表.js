/***
 * leetcode 61
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 * 
 * 
 * 例1：
 * 输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释:
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL
 * 
 * 例2：
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 
 * 
 * 解题思路：
 * 
 * 1->2->3->4->5->NULL, k = 2，拿这题来说，其实就是把最右边的两个节点 4->5 移动到链表的最左边即可。
 * 重点在于，怎么根据k的值，获取到这段节点的前一个节点以及链表最右侧的节点。k的值有可能是大于链表长度的，
 * 如果k等于链表长度，或者是链表长度的整数倍，移动之后其实跟初始值是一致的。
 * 
 * 可以使用滑动窗口思路，设立left和right值，两者的间距计算是关键，如下。
 * 
 * 也可以先计算链表的长度以及获取链表最右侧的节点，取余之后，获取key所对应的节点去进行移动，推荐这种方法
 *
 */

import { createLinkedList, printfLinkedList, ListNode } from '@/utils';

// 滑动窗口的思想，但是这种方法当k数量相比于链表长度大很多的时候，性能较差。
var rotateRight = function(head, k) {
  if (k === 0 || !head || !head.next) return head;
  let left = head ,right = head;
  // 根据k的值，找到滑动窗口需要的right所在的位置
  for (let i = 0; i < k; i++) {
    if (right.next) {
      right = right.next;
    } else {
      right = head;
    }
  }
  // 如果left和right位置一致，说明k是链表长度的整数倍，所以不需要移动
  if (left === right) return head;
  // 移动滑动窗口
  while(right.next) {
    left = left.next;
    right = right.next;
  }
  // 将k对应的链表节点右侧的链表移动到链表头部
  const newHead = left.next;
  left.next = null;
  right.next = head;
  return newHead;
};



// 先计算出链表的长度，然后取k % len的余，然后找到这个余所对应的要移动的链表位置。
var rotateRight = function(head, k) {
  if (k === 0 || !head || !head.next) return head;
  let len = 1, last = head;
  // 计算链表的长度，记录链表的最后一个节点
  while(last.next) {
    len++;
    last = last.next;
  }
  // 取余
  k = k % len;
  // 如果为0，说明k是链表长度的整数倍，所以不需要移动
  if (k === 0) return head;
  // 找到k所对应的链表节点
  let cur = head;
  while(len - k - 1) {
    k++;
    cur = cur.next;
  }
  // 移动
  const newHead = cur.next;
  cur.next = null;
  last.next = head;
  return newHead;
}
