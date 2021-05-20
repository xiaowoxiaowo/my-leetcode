/***
 * leetcode 93
 * 给定一个只包含数字的字符串，用以表示一个 IP 地址，返回所有可能从 s 获得的 有效 IP 地址 。你可以按任何顺序返回答案。
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
 * 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，
 * 但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
 * 
 * 
 * 例1：
 * 输入: s = "25525511135"
 * 输出: ["255.255.11.135","255.255.111.35"]
 * 
 * 例2：
 * 输入: s = "0000"
 * 输出: ["0.0.0.0"]
 * 
 * 例3：
 * 输入: s = "1111"
 * 输出: ["1.1.1.1"]
 * 
 * 输入：s = "010010"
 * 输出：["0.10.0.10","0.100.1.0"]
 * 
 * 输入：s = "101023"
 * 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 * 
 * 提示:
 * s 仅由数字组成
 * 
 * 解题思路：
 * 递归思路，重点在于IP地址的特性，每个整数必须小于等于255，如果超过一位数，第一个位数不能为0；
 */
var restoreIpAddresses = function(s) {
  let len = s.length;
  // 处理一些可以直接返回结果的情况
  if (len <= 3) return [];
  if (len === 4) return [[...s].join('.')];
  if (len > 12) return [];
  let res = [];
  // 对一个字符串或者整数进行判断，是否符合IP地址的特性
  const isVaild = (str) => {
    if (str.length > 1 && str[0] === '0') return false;
    if (str.length > 3 || (str.length === 3 && Number(str) > 255)) return false;
    return true;
  };
  const loop = (index, arr) => {
    // 当遍历到第三级，即arr中已经存在三个整数了
    if (arr.length === 3) {
      let retainArr = s.substring(index);
      // 如果剩下的字符串符合IP地址特性，将结果推入res数组
      return isVaild(retainArr) && res.push([...arr, retainArr].join('.'));
    }
    // 这里需要定义一下数组的上限，必须保证，剩下的字符串长度最小也能够满足后续IP地址块的数量
    for (let i = index; i < s.length - 3 + arr.length; i ++) {
      let curArr = s.substring(index, i + 1);
      // 判断当前取的字符串是否符合IP地址的特性，符合再进入递归
      if (!isVaild(curArr)) return;
      loop(i + 1, [...arr, curArr]);
    }
  };
  loop(0, []);
  return res;
};

console.log(restoreIpAddresses("010010"));

