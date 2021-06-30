/***
 * 剑指 Offer 37. 序列化二叉树
 * 
 * 请实现两个函数，分别用来序列化和反序列化二叉树。
 * 你需要设计一个算法来实现二叉树的序列化与反序列化。
 * 这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 * 
 * 输入：root = [1,2,3,null,null,4,5]
 * 输出：[1,2,3,null,null,4,5]
 */
// bfs广度优先遍历，非常基本的遍历，个人感觉难度不高，为啥标为困难？
// 解答过程很顺畅，除了为空的边缘条件没考虑，其他没问题，就不写备注了
var serialize = function(root) {
  if (!root) return [];
  const bfs = [root];
  const res = [];
  while (bfs.length) {
    const len = bfs.length;
    for (let i = 0; i < len; i ++) {
      const item = bfs.shift();
      res.push(!item ? null : item.val);
      if (item) {
        bfs.push(item.left);
        bfs.push(item.right);
      }
    }
  }
  return res;
};

var deserialize = function(data) {
  if (!data.length) return null;
  let index = 1;
  const root = new TreeNode(data[0]);
  const bfs = [root];
  while (bfs.length) {
    const len = bfs.length;
    for (let i = 0; i < len; i ++) {
      const node = bfs.shift();
      const left = data[index] === null ? null : new TreeNode(data[index]);
      const right = data[index + 1] === null ? null : new TreeNode(data[index + 1]);
      index += 2;
      node.left = left;
      node.right = right;
      if (left) bfs.push(left);
      if (right) bfs.push(right);
    }
  }
  return root;
};