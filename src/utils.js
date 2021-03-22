export function textSort (text) {
  if (Array.isArray(text)) return JSON.stringify(text);
  return text;
}

export function pritnf (text, type = 2) {
  const value = textSort(text);
  document.getElementById(`text${type}`).innerHTML = value;
}

export function swap(arr, i, j) {
	if (i === j ) return;
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

export function getRandomNum(low, high) {
  return Math.round(Math.random() * (high - low)) + low
}

export function getRandomArray(count) {
  const arr = []
  for (let i = 0; i < count; i++) {
    arr.push(Math.floor(i * Math.random() * 10))
  }
  return arr
}
// 近似数组
export function getNearlyArray(count, swapTime) {
  const arr = []
  for (let i = 0; i < count; i++) {
    arr.push(i)
  }

  for (let i = 0; i < swapTime; i++) {
    const x = Math.floor(Math.random() * count)
    const y = Math.floor(Math.random() * count)
    swap(arr, x, y)
  }

  return arr
}
// 大量重复元素数组
export function getRangedArray(count, min, max) {
  const arr = []
  for (let i = 0; i < count; i++) {
    arr.push(getRandomNum(min, max))
  }
  return arr
}

// 创建链表
export const createLinkedList = (arr) => {
  let head = {}, newArr = arr.slice();
  if (newArr.length) {
    head.val = newArr[0];
    head.next = createLinkedList(newArr.slice(1));
  } else {
    return null;
  }
  return head;
};

// 打印链表
export const printfLinkedList = (head) => {
  let res = '', cur = head;
  while(cur !== null) {
    res = res + cur.val + ' => ';
    cur = cur.next;
  }
  res = res + 'null';
  return res;
};

export function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

export function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}