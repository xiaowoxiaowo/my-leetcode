/***
 * leetcode 2
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 * 
 * 输入：l1 = [0], l2 = [0]
 * 输出：[0]
 * 
 * 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出：[8,9,9,9,0,0,0,1]
 * 
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */
 import { createLinkedList, printfLinkedList, ListNode } from '../../src/utils';

 var addTwoNumbers = function(l1, l2) {
   let curL = l1;
   let curR = l2;
   let overTen = false;
   let dummyHead = new ListNode();
   let curLink = dummyHead;
   while (curL || curR) {
     let sum = (curL ? curL.val : 0) + (curR ? curR.val : 0);
     if (overTen) {
       sum++;
       overTen = false;
     }
     if (sum >= 10) {
       sum = sum - 10;
       overTen = true;
     }
     curLink.next = new ListNode(sum);
     curLink = curLink.next;
     curL = curL ? curL.next : curL;
     curR = curR ? curR.next : curR;
   }
   if (overTen) {
     curLink.next = new ListNode(1);
   }
   return dummyHead.next;
 };
 
 var link1 = createLinkedList([9,9,9,9,9,9,9]);
 var link2 = createLinkedList([9,9,9,9]);
 console.log(printfLinkedList(addTwoNumbers(link1, link2)));