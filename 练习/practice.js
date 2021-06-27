/***
 * leetcode 109. 有序链表转换二叉搜索树1
 * 
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 
 * 给定的有序链表： [-10, -3, 0, 5, 9],
 * 一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

         0
        / \
      -3   9
      /   /
    -10  5

 * 
 */
// 递归，每次都寻找当前区间的中间节点
var sortedListToBST = function(head) {
  const loop = (start, end) => {
    // 终止条件
    if (!start || (start === end)) return null;
    if (start.next === end) return new TreeNode(start.val);
    // 快慢指针获取链表中间节点
    // 这里可以做一些优化，先把链表存储到数组中
    // 然后不断进行二分处理，比每次都快慢指针效率快
    let mid = quick = start;
    while (quick !== end && quick.next !== end) {
      mid = mid.next;
      quick = quick.next.next;
    }
    // 递归
    let tree = new TreeNode(mid.val);
    tree.left = loop(start, mid);
    tree.right = loop(mid.next, end);
    return tree;
  };
  return loop(head, null);
};

var linkedList = createLinkedList([-10, -3, 0, 5, 9]);

console.log(sortedListToBST(linkedList));