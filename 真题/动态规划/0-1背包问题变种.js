/***
 * leetcode ?
 * 有一个背包，它的容量为C。现在有n种不同的物品，编号为0...n-1，其中每一件物品的重量为w，价值为v。问可以向这个背包中盛放哪些物品，
 * 使得在不超过背包容量的基础上，物品的总价值最大
 * 
 * 这里的w和v都是数组，代表一个物品的重量和价值
 */

// 完全背包问题：每个物品可以无限使用
// 多重背包问题：每个物品不止1个，有num(i)个
// 多维费用背包问题：要考虑物品的体积和重量两个维度