/***
 * leetcode 75
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 例：
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 * 
 * 
 * 思路: 1.计数排序 2.三路快排
 */
import { swap, pritnf } from '../../src/utils';

// 计数排序
function sortColors(nums) {
  const len = nums.length;
  const countArr = new Array(3).fill(0);
  let numCount = 0;
  for (let i = 0; i < len; i ++) {
    countArr[nums[i]]++;
  }
  for (let j = 0; j < 3; j ++) {
    let count = countArr[j];
    while(count > 0) {
      nums[numCount] = j;
      numCount++;
      count--;
    }
  }
};

// 三路快排
function sortColors3(nums) {
  const len = nums.length;
	let lt = -1;
	let gt = len;
	let i = 0;
	while(i < gt) {
		if (nums[i] === 1) {
			i++;
		} else if (nums[i] === 2) {
			gt--;
			swap(nums, i, gt);
		} else {
			lt++;
			swap(nums, i, lt);
			i++;
		}
	}
};

var test = [2,0,2,1,1,0];
sortColors3(test);
pritnf(test, 2);