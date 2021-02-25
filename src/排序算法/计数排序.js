/**
 * 计数排序法 0(n+K) K是整数的范围，也可以表示成O(n)
 * 通过数组的序号用来计算数字大小，数组里的值，代表有多少个这么大的数字
 * 适用于一定范围的整数排序。因为是非比较排序，所以在取值范围不是很大的情况下, 速度快于其他任何排序算法
 * 
 * @param arrList number[]
 */
import { pritnf, getNearlyArray } from '../utils';

document.title = '计数排序法';

function countSort(arrList) {
	let list = arrList.slice();
	let newArr = new Array(list.length).fill(0);
	for (let v = 0; v < list.length; v++) {
		newArr[list[v]]++;
	}
	list = [];
	for(let i = 0; i < newArr.length; i++) {
			// 循环数字次数
			for(let k = newArr[i]; k > 0; k--) {
				list.push(i);
			}
	}
	newArr = null;
	return list;
}

 const test = getNearlyArray(100, 100);

 pritnf(test, 1);
 pritnf(countSort(test, 2));