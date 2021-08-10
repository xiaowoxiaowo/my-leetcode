/**
 * 快速排序法 O(nlogn)，最差情况（当数组近乎有序）为O(n^2)，可以使用随机化来尽量避免这个问题
 * 
 * 总体思想：取第一个项，放到它应该放的位置，然后把数组一分为二。
 * 前面都是小于它的元素，后面都是大于它的元素。
 * 依次按这个步骤继续递归
 * 
 * 性能比较优秀，不过对于有序数组性能比归并排序稍差
 * 对于值相差较小，有许多重复数据的数组性能会很差
 * @param arrList number[]
 */
import {
	swap, 
	pritnf, 
  getRandomArray,
  getRandomNum
} from '../../utils';

document.title = '快速排序法';

// 对arr[l...r]部分进行_partition操作
// 返回p，使得arr[l...p-1] < arr[p] ; arr[p+1...r] > arr[p]
function _partition(arrList, l, r) {
  // 取随机数，在对相对有序的数组排序时，尽量避免快排退化到O(n^2)
  swap(arrList, l, getRandomNum(l, r));

  const v = arrList[l];

  // arr[l+1...j] < v ; arr[j+1...i) > v
  // j就是v这个值最后应该存储的位置
  let j = l;
  for (let i = l + 1; i <= r; i ++) {
    if (arrList[i] < v) {
      swap(arrList, i, j + 1);
      j++;
    }
  }

  swap(arrList, l, j);

  return j;
}

// 对arr[l...r]部分进行快速排序
function _quickSort(arrList, l, r) {
  // 优化：同归并排序那样，当 r - l <= 15 时，使用插入排序
  if (l >= r) return;

  const p = _partition(arrList, l, r);
  _quickSort(arrList, l, p - 1);
  _quickSort(arrList, p + 1, r);
}

function quickSort(arrList) {
  const len = arrList.length;
  _quickSort(arrList, 0, len - 1);
}

const test = getRandomArray(100);

pritnf(test, 1);
quickSort(test);
pritnf(test, 2);
