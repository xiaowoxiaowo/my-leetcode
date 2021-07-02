/***
 * leetcode 1833. 雪糕的最大数量
 * 
 * 商店中新到 n 支雪糕，用长度为 n 的数组 costs 表示雪糕的定价，其中 costs[i] 表示第 i 支雪糕的现金价格。
 * Tony 一共有 coins 现金可以用于消费，他想要买尽可能多的雪糕。
 * 给你价格数组 costs 和现金量 coins ，请你计算并返回 Tony 用 coins 现金能够买到的雪糕的 最大数量 。
 * 
 * 注意：Tony 可以按任意顺序购买雪糕。
 * 
 * 输入：costs = [1,3,2,4,1], coins = 7
 * 输出：4
 * 解释：Tony 可以买下标为 0、1、2、4 的雪糕，总价为 1 + 3 + 2 + 1 = 7
 * 
 * 输入：costs = [10,6,8,7,7,8], coins = 5
 * 输出：0
 * 解释：Tony 没有足够的钱买任何一支雪糕。
 * 
 * 输入：costs = [1,6,3,1,2,5], coins = 20
 * 输出：6
 * 解释：Tony 可以买下所有的雪糕，总价为 1 + 6 + 3 + 1 + 2 + 5 = 18 。
 * 
 */
// 贪心题，看出来了就非常简单，题解就不写了
var maxIceCream = function(costs, coins) {
  costs.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < costs.length; i ++) {
    const r = coins - costs[i];
    if (r < 0) return res;
    coins = r;
    res++;
  }
  return res;
};

console.log(maxIceCream([1,3,2,4,1], 7));
console.log(maxIceCream([10,6,8,7,7,8], 5));
console.log(maxIceCream([1,6,3,1,2,5], 20));