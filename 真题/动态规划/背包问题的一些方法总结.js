/***
 * 常见的背包问题可以分为
 * 1、组合问题。例：组合总和4
 * 2、True、False问题。例：单词拆分
 * 3、最大最小问题。例：一和零
 * 
 * 组合问题一般公式
 * dp[i] += dp[i-num]
 * 
 * True、False问题一般
 * dp[i] = dp[i] or dp[i-num]
 * 
 * 最大最小问题一般公式
 * dp[i] = min(dp[i], dp[i-num]+1)或者dp[i] = max(dp[i], dp[i-num]+1)
 * 
 * 背包问题具备的特征：给定一个target，target可以是数字也可以是字符串，再给定一个数组nums，nums中装的可能是数字，
 * 也可能是字符串，问：能否使用nums中的元素做各种排列组合得到target。
 * 
 * 1.如果是0-1背包，即数组中的元素不可重复使用，nums放在外循环，target在内循环，且内循环倒序；
 * for (let i of nums) {
 *  for (let j = i - 1; j >= 0; j --) {
 *    ....
 *  }
 * }
 * 
 * 2.如果是完全背包，即数组中的元素可重复使用，nums放在外循环，target在内循环。且内循环正序。
 * for (let i of nums) {
 *  for (let j = 1; j <= target; j ++) {
 *    ....
 *  }
 * }
 * 
 * 3.如果组合问题需考虑元素之间的顺序，需将target放在外循环，将nums放在内循环。
 * for (let i of target) {
 *  for (let j of nums) {
 *    ....
 *  }
 * }
 */