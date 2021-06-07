/***
 * leetcode 605 种花问题
 * 
 * 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
 * 
 * 给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。
 * 另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。
 * 
 * 输入：flowerbed = [1,0,0,0,1], n = 1
 * 输出：true
 * 
 * 输入：flowerbed = [1,0,0,0,1], n = 2
 * 输出：false
 * 
 */
// 贪心算法思路，再能种花的地方就种花，取最大值
// 重点在于遍历的思路，如果遍历的时候寻找0的节点，需要考虑的地方很多，前后为0，头部，尾部，所以我们可以寻找1的节点
// 定义一个变量来记录上一个为1的节点下标
var canPlaceFlowers = function(flowerbed, n) {
  const len = flowerbed.length;
	let sum = 0;
	let prev = -1;
  for (let i = 0; i < len; i ++) {
		if (flowerbed[i] === 1) {
			// 遍历到为1的节点
			if (prev < 0) {
				// 如果prev < 0,说明从左侧头部开始都为0，计算可以种花的数量
				sum += Math.floor(i / 2);
			} else {
				// 如果prev >= 0，说明前面存在为1的节点，计算种花数量
				// 这里 -2 是为了减去当前为1的节点，以及上一个1节点后面的0节点
				sum += Math.floor((i - prev - 2) / 2);
			}
			if (sum >= n) return true;
			prev = i;
		}
	}
	// 遍历完成之后的处理，因为右侧最后几位有可能不为1
	if (prev < 0) {
		// 说明整个数组都为0
		sum += Math.floor((len + 1) / 2);
	} else {
		sum += Math.floor((len - prev - 1) / 2);
	}
	return sum >= n;
};

console.log(canPlaceFlowers([0], 1));