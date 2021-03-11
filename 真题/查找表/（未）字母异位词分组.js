/***
 * leetcode 49
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 
 * 例1：
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: 
 * [
 * ["ate","eat","tea"],
 * ["nat","tan"],
 * ["bat"]
 * ]
 * 
 * 说明:
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 */

// 排序方法
 var groupAnagrams = function(strs) {
  const map = new Map();
  for (let str of strs) {
    let array = Array.from(str);
    array.sort();
    let key = array.toString();
    let list = map.get(key) ? map.get(key) : new Array();
    list.push(str);
    map.set(key, list);
  }
  return Array.from(map.values());
};

// 计数方法
var groupAnagrams = function(strs) {
  const map = new Object();
  for (let s of strs) {
    const count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    map[count] ? map[count].push(s) : map[count] = [s];
  }
  return Object.values(map);
};




console.log(JSON.stringify(groupAnagrams(["eat","tea","tan","ate","nat","bat","ac","bd","aac","bbd","aacc","bbdd","acc","bdd"])));
console.log('[["bdd"],["bat"],["nat","tan"],["ac"],["ate","eat","tea"],["bd"],["aac"],["bbd"],["aacc"],["bbdd"],["acc"]]');