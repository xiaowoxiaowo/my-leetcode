/***
 * leetcode 401
 * 二进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。
 * 每个 LED 代表一个 0 或 1，最低位在右侧。
 * 给定一个非负整数 n 代表当前 LED 亮着的数量，返回所有可能的时间。
 * 
 * 例1：
 * 输入: n = 1
 * 输出：["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
 * 
 * 说明：
 * 输出的顺序没有要求。
 * 小时不会以零开头，比如 “01:00” 是不允许的，应为 “1:00”。
 * 分钟必须由两位数组成，可能会以零开头，比如 “10:2” 是无效的，应为 “10:02”。
 * 超过表示范围（小时 0-11，分钟 0-59）的数据将会被舍弃，也就是说不会出现 "13:00", "0:61" 等时间。
 * 
 * 解题思路：
 * 
 */

var readBinaryWatch = function(num) {
  if (num === 0) return ["0:00"];
  const hours = [1,2,4,8];
  const minutes = [1,2,4,8,16,32];
  let res = [];
  const loop = (hNum, mNum) => {
    for (let i = 1; i <= hNum; i ++) {

    }
  };
  for (let i = 1; i <= num; i ++) {
    for (let x = i; x <= 4; x ++) {
      for (let y = num - x; y <= 6; y ++) {
        loop(x, y);
      }
    }
  }
  return res;
};


var readBinaryWatch = function(num) {
  const arr = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32];
  const result = [];
  backTrace(arr, num, 0, [0, 0], result);
  return result;
};

var backTrace = function(arr, num, start, temp, result) {
  if (temp[0] >= 12 || temp[1] >= 60) return
  if (num === 0) {
    result.push(`${temp[0]}:${padding(temp[1])}`)
    return
  }

  for (let i = start; i < arr.length; i++) {
    if (i <= 3) {
      temp[0] = temp[0] + arr[i]
    } else {
      temp[1] = temp[1] + arr[i]
    }
    num = num - 1
    backTrace(arr, num, i + 1, temp, result)
    if (i <= 3) {
      temp[0] = temp[0] - arr[i]
    } else {
      temp[1] = temp[1] - arr[i]
    }
    num = num + 1
  }
}

var padding = function(num) {
  return num < 10 ? `0${num}` : num
}



var readBinaryWatch = function (num) {
  const timeList = [];
  function dfs(time, n, index) {
      const hour = time >> 6, minute = time & 0b111111;
      if (hour > 11 || minute > 59) return;
      if (n === 0) {
          timeList.push(`${hour}:${minute < 10 ? "0" + minute : minute}`);
          return;
      }
      const end = 10 - n;
      while (index <= end) {
          dfs(time | (1 << index), n - 1, ++index);
      }
  }
  dfs(0, num, 0);
  return timeList;
};