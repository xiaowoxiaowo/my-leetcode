/**
 * 双路快速排序法 O(nlogn)，为了解决对有很多重复数据的数组排序时性能很差
 * 
 * 总体思想：思想和快速排序整体一致，只是在partition的时候，两侧都会平分=v的元素。保证两侧的数据相差不会太大
 * 
 * @param arrList number[]
 */
import {
	swap, 
	pritnf, 
  getRandomArray,
  getRandomNum
} from '../utils';

document.title = '双路快速排序法';

// 对arr[l...r]部分进行_partition操作
// 返回p，使得arr[l...p-1] <= arr[p] ; arr[p+1...r] >= arr[p]
function _partition2(arrList, l, r) {
  // 取随机数，在对相对有序的数组排序时，尽量避免快排退化到O(n^2)
  swap(arrList, l, getRandomNum(l, r));
  const v = arrList[l];

  // arr[l+1...i) <= v ; arr[j...r) >= v
  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= r && arrList[i] < v) i++;
    while(j > l + 1 && arrList[j] > v) j--;
    if (i > j) break;
    swap(arrList, i, j);
    i++;
    j--;
  }
  swap(arrList, l , j);
  return j;
}

// 对arr[l...r]部分进行快速排序
function _quickSort2(arrList, l, r) {
  // 优化：同归并排序那样，当 r - l <= 15 时，使用插入排序
  if (l >= r) return;

  const p = _partition2(arrList, l, r);
  _quickSort2(arrList, l, p - 1);
  _quickSort2(arrList, p + 1, r);
}

function quickSort2(arrList) {
  const len = arrList.length;
  _quickSort2(arrList, 0, len -1);
}

const test = getRandomArray(100);

pritnf(test, 1);
quickSort2(test);
pritnf(test, 2);
