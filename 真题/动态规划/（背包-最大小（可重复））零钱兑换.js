/***
 * leetcode 322
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 你可以认为每种硬币的数量是无限的。
 * 
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 * 
 * 输入：coins = [2], amount = 3
 * 输出：-1
 * 
 * 输入：coins = [1], amount = 0
 * 输出：0
 * 
 * 输入：coins = [1], amount = 1
 * 输出：1
 * 
 * 输入：coins = [1], amount = 2
 * 输出：2
 * 
 * 解题思路：
 * 
 * 第一道独立做出来的背包问题，开心。。
 * 本题是一道典型的背包问题，可重复取出的值，然后需要等于一个target值，问最小的组合项的个数。
 * 按照我们一般的公式
 * 
 * 可重复取值的循环大体思路
 * for (let i of nums) {
 *  for (let i of target) {
 *  }
 * }
 * 
 * 取最小值的状态转义方式的一般公式
 * dp[j] = Math.min(dp[j], dp[j - nums[i]] + 1);
 * 
 * 本题的二维数组
 * x轴，使用coins中的1,2,3...coins.length个元素
 * y轴，0,1,2,3....amount
 * 
 * dp为空间复杂度优化后的表现，一个一维数组
 */
var coinChange = function(coins, amount) {
  const len = coins.length;
  // 边界条件处理
  if (len === 0) return amount === 0 ? 0 : -1;
  // dp代表当amount为[1,2,3,4....]值时，可取coins中元素的最小值
  const dp = new Array(amount + 1).fill(Infinity);
  // 初始化当x轴为0，即只取coins中的第一个元素时，dp[0,1,2...amount]的值
  for (let i = 0; i <= amount; i ++) {
    // 当前amount可以被coins[0]元素整除时，设置该值为i / coins[0]
    // 这里需要注意，当amount为0时，可以存在一个0值，说明取了0个元素
    if ((i % coins[0]) === 0) dp[i] = i / coins[0];
  }
  for (let i = 1; i < len; i ++) {
    // 这里需要正序遍历，因为coins中的元素可被重复使用
    // 比如例子中的coins = [1, 2, 5], amount = 11，当遍历到5的值时
    // amount = 6时，dp[6]将被更新
    // amout = 11时，dp[11]的值会跟dp[6]有关，但是这时的dp[6]已经被更新过
    // 这样就实现了，coins中元素的重复使用
    for (let j = 1; j <= amount; j ++) {
      if (j >= coins[i]) {
        // 核心状态转移方程
        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
      }
    }
  }
  // 结果的处理
  const res = dp[amount];
  return res === Infinity ? -1 : res;
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));