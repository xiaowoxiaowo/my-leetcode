/***
 * ** 完全二叉树：
 * 除了最深那一层存在单个子节点，其他层都是满节点。而且最深那层的单个子节点都是左节点。
 * 单个左节点的右侧不能再有其他节点
 * 
 * ** 二叉树前序遍历：
 * 访问顺序  本节点-->左侧节点（如还有子节点，依次访问）-->右侧节点
 * 
 * ** 二叉树中序遍历：
 * 访问顺序  左侧节点（如还有子节点，依次访问）-->本节点-->右侧节点
 * 
 * ** 二叉树后序遍历：
 * 访问顺序  左侧节点-->右侧节点（如还有子节点，依次访问）-->本节点
 * 
 * ** 二分搜索（查找）树：
 * 若它的左子树不为空，左子树上所有节点的值都小于它的根节点。
 * 若它的右子树不为空，右子树上所有的节点的值都大于它的根节点。
 * 以左右节点为根的子树仍为二分搜索树
 * 
 * ** 二分搜索（查找）树基本操作
 * 最大值（最左侧节点）
 * 最小值（最右侧节点）
 * 前驱节点（二叉搜索树的中序遍历序列中的前面一个结点，即比该结点小的所有结点中最大的那个结点，其实就是左节点的最右侧右节点）
 * 后继节点（二叉搜索树的中序遍历序列中的后面一个结点，即比该结点大的所有结点中最小的那个结点，其实就是右节点的最左侧左节点）
 * 查上界（传入一个值，在二叉树中查找比这个值大而且最接近该值的节点）
 * 查下界（传入一个值，在二叉树中查找比这个值小而且最接近该值的节点）
 * 插入，查找，删除，某个元素的排名，寻找第k大（小）的元素
 * 
 * ** 平衡二叉树(AVL树)
 * 在符合二叉查找树的基础上，任何节点的两个子树的高度最大差为1。平衡二叉树的性能是比较高的，
 * 但不是最高的，最好性能需要建立一个最优二叉树，但最优二叉树的创建和维护成本都比较高，
 * 所以一般平衡二叉树足够满足查询性能要求。
 * 
 * 红黑树
 * 是一种特化的平衡二叉树，可以在插入和删除操作时通过特定操作保持二叉查找树的平衡，从而获得较高的查找性能。
 * 
 */