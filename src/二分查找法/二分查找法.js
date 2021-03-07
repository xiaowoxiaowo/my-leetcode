/**
 * 二分查找法 0(logn)
 * 对于有序数列，才能使用二分查找法。
 * 取一个数组中间的值，如果不是我们要找的值，就从它的左边（都小于它）或者右边（都大于它）里面寻找
 * @param arrList 数组
 * @param target 目标值
 */
import { swap, pritnf, getNearlyArray } from '../utils';

document.title = '二分查找法';

 function binarySearch(arrList, target) {
	let l = 0;
	let r = arrList.length - 1;
	while(l <= r) {
		// (l + r)/2这种方式有可能会导致整型数据溢出问题，可以改写成下面的方式
		let mid = Math.floor(l/2 + r/2);
		if (arrList[mid] == target) {
			return mid;
		}
		if (arrList[mid] < target) {
			l = mid + 1;
		} else {
			r = mid - 1;
		}
	}
	return -1;
 }

 const test = getNearlyArray(10);

 pritnf(test, 1);
 pritnf(binarySearch(test, 8), 2);