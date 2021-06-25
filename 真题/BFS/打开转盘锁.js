/***
 * leetcode 752. 打开转盘锁
 * 
 * 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。
 * 每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
 * 锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
 * 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
 * 字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。
 * 
 * 输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
 * 输出：6
 * 解释：可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
 * 注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
 * 因为当拨动到 "0102" 时这个锁就会被锁定。
 * 
 * 输入: deadends = ["8888"], target = "0009"
 * 输出：1
 * 解释：把最后一位反向旋转一次即可 "0000" -> "0009"。
 * 
 * 输入: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
 * 输出：-1
 * 解释：无法旋转到目标数字且不被锁定。
 * 
 * 输入: deadends = ["0000"], target = "8888"
 * 输出：-1
 * 
 */
// 广度遍历（这个遍历用的少，得多注意）
// 每次遍历相当于步数，每一步相应于，对这所有四个数字都进行加或者减的处理
var openLock = function (deadends, target) { 
  if (target === '0000') return 0;
  // 初始化危险数字以及访问过的数字
  const deadSet = new Set(deadends);
  const visitedSet = new Set();
  if (deadSet.has('0000')) return -1;

  // js里广度遍历一般使用队列，先进先去
  const bfs = ['0000'];
  let step = 0;
  // 广度遍历
  while(bfs.length) {
    // 这里需要记录一下当前的bfs长度，因为后续会push新的项进入bfs中
    const len = bfs.length;
    // 遍历一步操作中所有涉及到的数字
    for (let i = 0; i < len; i ++) {
      // 取出数字
      const item = bfs.shift();
      // 如果等于结果，直接返回步数
      if (item === target) return step;
      // 如果是危险数字或者已经被遍历过，跳过当前数字
      if (visitedSet.has(item)) continue;
      if (deadSet.has(item)) continue;
      // 加入缓存
      visitedSet.add(item);
      // 遍历数字的四个位
      for (let j = 0; j < item.length; j ++) {
        // 将字符串转为数字
        const num = item[j] - '0';
        // 计算该位数字加1或者-1的结果
        const up = (num + 1) % 10;
        const down = (num + 9) % 10;
        // 将变化后的数字推入bfs中
        bfs.push(item.slice(0, j) + up + item.slice(j + 1));
        bfs.push(item.slice(0, j) + down + item.slice(j + 1));
      }
    }
    // 一次遍历，步数加1
    step++;
  }
  return -1;
};