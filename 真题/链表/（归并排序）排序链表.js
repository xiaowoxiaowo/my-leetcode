/***
 * leetcode 148
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 O(nlogn) 
 * 
 * 
 * 例1：
 * 输入: head = [4,2,1,3]
 * 输出: [1,2,3,4]
 * 
 * 例2：
 * 输入: head = [-1,5,3,4,0]
 * 输出: [-1,0,3,4,5]
 * 
 * 例3：
 * 输入: head = []
 * 输出: []
 * 
 * 
 */
import { createLinkedList, printfLinkedList, ListNode } from '@/utils';

// 偷鸡方法，先把链表取出放到一个数组中，对数组排序，然后再把链表连起来
var sortList1 = function(head) {
  if (!head || !head.next) return head;
  const dummy = new ListNode(-1);
  let linkList = [], p = head;
  while(p){
    linkList.push(p);
    p = p.next;
  }
  linkList.sort((a,b) => a.val - b.val);
  p = dummy;
  for (let i = 0; i < linkList.length; i ++) {
    p.next = linkList[i];
    p = linkList[i];
  }
  p.next = null;
  return dummy.next;
};

// 自顶向下归并排序的思路，时间复杂度O(nlogn),空间复杂度O(logn)
var sortList = function (head) {
  if (!head || !head.next) return head;
  let slow = head, fast = head, pre;
  // 快慢指针，找到这个链表的中间项
  while(fast && fast.next){
    pre = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // 将链表在中间断开
  pre.next = null;
  const l = sortList(head);
  const r = sortList(slow);
  return merge(l, r);
}

var merge = function (left, right) {
  const dummy = new ListNode(-1);
  let cur = dummy;
  // 归并排序思路
  while(left && right) {
    if (left.val > right.val) {
      cur.next = right;
      right = right.next;
    } else {
      cur.next = left;
      left = left.next;
    }
    cur = cur.next;
  }
  // 不同于数据的优化，利用链表的特性，只需要设置next的值，后续的链表也都是连续的
  if (left) cur.next = left;
  if (right) cur.next = right;
  return dummy.next;
}

var test1 = createLinkedList([4,2,1,3]);
var test2 = createLinkedList([-1,5,3,4,0]);

console.log(printfLinkedList(sortList(test1)));
console.log(printfLinkedList(sortList(test2)));


const merge = (head1, head2) => {
  const dummyHead = new ListNode(0);
  let temp = dummyHead, temp1 = head1, temp2 = head2;
  while (temp1 !== null && temp2 !== null) {
      if (temp1.val <= temp2.val) {
          temp.next = temp1;
          temp1 = temp1.next;
      } else {
          temp.next = temp2;
          temp2 = temp2.next;
      }
      temp = temp.next;
  }
  if (temp1 !== null) {
      temp.next = temp1;
  } else if (temp2 !== null) {
      temp.next = temp2;
  }
  return dummyHead.next;
}

// 归并排序，自底向上，空间复杂度O(1)
var sortList2 = function(head) {
  if (head === null) {
      return head;
  }
  let length = 0;
  let node = head;
  while (node !== null) {
      length++;
      node = node.next;
  }
  const dummyHead = new ListNode(0, head);
  // 1, 2, 4
  for (let subLength = 1; subLength < length; subLength <<= 1) {
      let prev = dummyHead, curr = dummyHead.next;
      while (curr !== null) {
          let head1 = curr;
          for (let i = 1; i < subLength && curr.next !== null; i++) {
              curr = curr.next;
          }
          let head2 = curr.next;
          curr.next = null;

          curr = head2;
          for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {
              curr = curr.next;
          }
          let next = null;
          if (curr !== null) {
              next = curr.next;
              curr.next = null;
          }
          const merged = merge(head1, head2);
          prev.next = merged;
          while (prev.next !== null) {
              prev = prev.next;
          }
          curr = next;
      }
  }
  return dummyHead.next;
};
