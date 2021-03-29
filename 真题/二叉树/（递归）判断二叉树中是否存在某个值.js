const contain = (root, key) => {
	if (root === null) return false;
	if (root.val === key) return true;
	if (contain(root.left, key) || contain(root.right, key)) return true;
	return false;
};
