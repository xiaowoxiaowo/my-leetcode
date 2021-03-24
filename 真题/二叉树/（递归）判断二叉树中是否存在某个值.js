const contain = (root, key) => {
	if (root === null) return false;
	if (root.val === key) return true;
	if (contain(root.left, key) || contain(root.right, key)) return true;
	return false;
};

// 二分搜索树
// 若它的左子树不为空，左子树上所有节点的值都小于它的根节点。
// 若它的右子树不为空，右子树上所有的节点的值都大于它的根节点。