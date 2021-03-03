/**
 * 三路快速排序法 O(nlogn)，对等于v的值单独分离，在对于有大量重复元素的数据，具有更好的性能
 * 
 * 总体思想：思想和双路快速排序整体一致，只是在partition的时候，增加了对=v数据的处理
 * 
 * @param arrList number[]
 */
import {
	swap, 
	pritnf, 
  getRandomArray,
  getRandomNum,
  getNearlyArray
} from '../utils';

document.title = '三路快速排序法';

function _partition3(arrList, l, r) {
  // 取随机数，在对相对有序的数组排序时，尽量避免快排退化到O(n^2)
  swap(arrList, l, getRandomNum(l, r));
  const v = arrList[l];

  let lt = l;
  let gt = r + 1;
  let i = l + 1;
  while (i < gt) {
    if (arrList[i] < v) {
      swap(arrList, i, lt + 1);
      lt++;
      i++;
    } else if (arrList[i] > v) {
      swap(arrList, i, gt - 1);
      gt--;
    } else {
      i++;
    }
  }
  swap(arrList, l, lt);
  return [lt, gt];
}

// 三路快速排序处理 arr[l...r]
// 将arr[l...r]分为 <v ; ==v ; >v 三部分
// 之后递归对 <v ; >v 两部分继续进行三路快速排序
function _quickSort3(arrList, l, r) {
  // 优化：同归并排序那样，当 r - l <= 15 时，使用插入排序
  if (l >= r) return;

  const [lt, gt] = _partition3(arrList, l, r);
  _quickSort3(arrList, l, lt - 1);
  _quickSort3(arrList, gt, r);
}

function quickSort3(arrList) {
  const len = arrList.length;
  _quickSort3(arrList, 0, len -1);
}

const test = getRandomArray(100);

pritnf(test, 1);
quickSort3(test);
pritnf(test, 2);
